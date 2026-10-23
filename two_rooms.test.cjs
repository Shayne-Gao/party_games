"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { webcrypto } = require("node:crypto");
const html = fs.readFileSync(path.join(__dirname, "two_rooms.html"), "utf8");
const core = html.match(/<script id="room-core">([\s\S]*?)<\/script>/)[1];
const app = html.match(/<script id="room-app">([\s\S]*?)<\/script>/)[1];
new vm.Script(app);
const context = vm.createContext({ crypto: webcrypto, Date });
vm.runInContext(core, context);
const api = vm.runInContext("({makeRoom, mutateRoom, viewFor, secretId})", context);
const json = value => JSON.parse(JSON.stringify(value));
function lobby(total) {
    const tokens = Array.from({ length: total }, () => api.secretId());
    let room = api.makeRoom("ABC234", tokens[0], "Host");
    for (let i = 1; i < total; i++) room = api.mutateRoom(room, tokens[i], { type: "join", name: "Player " + i });
    return { room, tokens };
}
for (let total = 1; total <= 30; total++) {
    const { room: waiting, tokens } = lobby(total);
    assert.equal(waiting.players[0].id, waiting.ownerId, "owner is a player");
    if (total > 1) assert.throws(() => api.mutateRoom(waiting, tokens[1], { type: "start" }), /房主/);
    let room = api.mutateRoom(waiting, tokens[0], { type: "start" });
    assert.equal(room.phase, "playing");
    assert(!("round" in room) && !("deadline" in room));
    if (total === 1) {
        assert(["president", "bomber"].includes(room.players[0].role));
        assert.equal(room.players[0].area, "A");
    } else {
        assert.equal(room.players.filter(p => p.role === "president").length, 1);
        assert.equal(room.players.filter(p => p.role === "bomber").length, 1);
        assert.equal(room.players.filter(p => p.role === "gambler").length, total % 2);
        assert.equal(room.players.filter(p => ["blue", "president"].includes(p.role)).length, Math.floor(total / 2));
        assert.equal(room.players.filter(p => ["red", "bomber"].includes(p.role)).length, Math.floor(total / 2));
        assert.equal(room.players.filter(p => p.area === "A").length, Math.floor(total / 2));
    }
    const assignments = room.players.map(p => p.role);
    for (const token of tokens) {
        const snapshot = json(api.viewFor(room, token));
        assert(snapshot.myRole);
        assert(snapshot.players.every(p => !("role" in p) && !("token" in p)));
        assert(!("winner" in snapshot) && !("round" in snapshot) && !("deadline" in snapshot));
        assert(!JSON.stringify(snapshot).includes(token));
        const resumed = api.mutateRoom(json(room), token, { type: "join", name: "Name cannot replace identity" });
        assert.deepEqual(json(resumed), json(room));
    }
    assert.throws(() => api.viewFor(room, api.secretId()), /凭证/);
    assert.throws(() => api.mutateRoom(room, api.secretId(), { type: "join", name: "Impostor" }), /已经发牌/);
    assert.throws(() => api.mutateRoom(room, tokens[0], { type: "start" }), /大厅/);
    assert.throws(() => api.mutateRoom(room, tokens[0], { type: "reset" }), /结束后/);
    if (total > 1) assert.throws(() => api.mutateRoom(room, tokens[1], { type: "finish", gameId: room.gameId }), /房主/);
    const before = JSON.stringify(room);
    assert.throws(() => api.mutateRoom(room, tokens[0], { type: "finish", gameId: "stale-game" }), /本局已改变/);
    assert.throws(() => api.mutateRoom(room, tokens[0], { type: "exchange" }), /不支持/);
    assert.equal(JSON.stringify(room), before, "invalid operation does not mutate saved room");
    room = api.mutateRoom(room, tokens[0], { type: "finish", gameId: room.gameId });
    assert.deepEqual(room.players.map(p => p.role), assignments, "finishing never changes identities");
    assert.equal(room.phase, "ended");
    assert(api.viewFor(room, tokens[0]).players.every(p => p.role));
    assert(!("winner" in api.viewFor(room, tokens[0])), "initial positions must never determine the winner");
    assert.throws(() => api.mutateRoom(room, tokens[0], { type: "finish", gameId: room.gameId }), /进行中/);
    const oldGame = room.gameId;
    const restored = json(room);
    assert.equal(api.viewFor(restored, tokens[0]).gameId, oldGame);
    room = api.mutateRoom(restored, tokens[0], { type: "reset" });
    assert.equal(room.players.length, total);
    assert(room.players.every(p => p.role === null && p.area === null));
    room = api.mutateRoom(room, tokens[0], { type: "start" });
    assert.notEqual(room.gameId, oldGame);
}
const { room: soloLobby, tokens: soloTokens } = lobby(1);
assert.throws(() => api.mutateRoom(soloLobby, api.secretId(), { type: "join", name: "Host" }), /昵称已使用/);
assert.throws(() => api.mutateRoom(soloLobby, "bad-token", { type: "join", name: "New" }), /凭证/);
const full = lobby(30);
assert.throws(() => api.mutateRoom(full.room, api.secretId(), { type: "join", name: "Overflow" }), /已满/);
const hostRoles = new Set();
for (let i = 0; i < 200; i++) {
    const game = lobby(6);
    hostRoles.add(api.mutateRoom(game.room, game.tokens[0], { type: "start" }).players[0].role);
}
assert.equal(hostRoles.size, 4, "first player can receive every basic identity");
const legacy = lobby(7);
const old = api.mutateRoom(legacy.room, legacy.tokens[0], { type: "start" });
old.phase = "predicting"; old.round = 3; old.deadline = 1234; old.prediction = null;
const restoredLegacy = api.mutateRoom(json(old), legacy.tokens[0], { type: "join" });
assert.equal(restoredLegacy.phase, "playing");
assert.equal(restoredLegacy.gameId, old.gameId);
assert.deepEqual(json(restoredLegacy.players), json(old.players));
assert(!("round" in restoredLegacy) && !("deadline" in restoredLegacy));
assert.equal(api.viewFor(old, legacy.tokens[1]).phase, "playing");
assert(html.includes('window.addEventListener("pagehide",hideIdentity)'));
assert(html.includes('id="identity-dialog"'));
assert(!html.includes('id="timer"') && !html.includes('id="round-panel"'));
console.log("PASS: 1–30 players, private views, stable identities, host-only finish/reset, offline rounds, legacy recovery and fullscreen card");
