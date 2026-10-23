const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const html = fs.readFileSync(path.join(__dirname, "decrypto_local.html"), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const stored = new Map();
let failStorage = false;
let allowConfirm = true;
const confirmations = [];

function boot() {
    const elements = new Map();
    const listeners = {};
    const node = () => ({
        hidden: false, textContent: "", disabled: false, children: [], open: false, style: {},
        showModal() { this.open = true; },
        close() { this.open = false; },
        setAttribute(name, value) { this[name] = value; },
        addEventListener(name, callback) { this[name] = callback; },
        append(...children) { this.children.push(...children); },
        replaceChildren() { this.children = []; }
    });
    const document = {
        hidden: false,
        getElementById(id) {
            if (!elements.has(id)) elements.set(id, node());
            return elements.get(id);
        },
        createElement: node,
        createTextNode: text => ({ textContent: text }),
        addEventListener: (name, callback) => { listeners[name] = callback; }
    };
    const context = vm.createContext({
        document, console,
        window: { addEventListener: (name, callback) => { listeners[name] = callback; } },
        localStorage: {
            getItem: key => stored.get(key) || null,
            setItem(key, value) {
                if (failStorage) throw new Error("storage unavailable");
                stored.set(key, value);
            }
        },
        confirm: message => { confirmations.push(message); return allowConfirm; }
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, "decrypto_word_bank.js"), "utf8"), context);
    vm.runInContext(script, context);
    return { run: code => vm.runInContext(code, context), document, listeners };
}

let app = boot();
app.run("startGame()");
assert.equal(app.document.getElementById("intercept-button").disabled, true);
assert.match(app.document.getElementById("intercept-hint").textContent, /第二轮开放/);
assert.equal(app.document.getElementById("intercept-minus").disabled, true);
const words = app.run("JSON.stringify(game.words)");
assert.equal(app.run("new Set(game.words).size"), 4);
for (let i = 0; i < 1000; i += 1) {
    const code = app.run("shuffle([1, 2, 3, 4]).slice(0, 3)");
    assert.equal(new Set(code).size, 3);
    assert.ok(code.every(digit => digit >= 1 && digit <= 4));
}
app.run("revealCode()");
assert.equal(confirmations.length, 0);
const code = app.run("currentRound().code");
const expectedWords = JSON.parse(app.run("JSON.stringify(game.words)"));
assert.deepEqual(app.document.getElementById("code-words").children.map(child => child.textContent),
    code.split("-").map(digit => expectedWords[Number(digit) - 1]));
assert.equal(app.document.getElementById("board").hidden, true);
app.run("hideCode()");
assert.equal(app.document.getElementById("code-words").children.length, 0);
assert.equal(app.document.getElementById("code-button").className, "code-recheck");
assert.equal(app.document.getElementById("code-button").textContent, "再次查看密码");
app.run("revealCode()");
assert.equal(app.document.getElementById("code-confirmation").open, true);
assert.equal(app.run("secretVisible"), false);
assert.equal(app.document.getElementById("code").textContent, "");
assert.equal(app.run("currentRound().code"), code);
app.run("cancelCodeView(); confirmCodeView()");
assert.equal(app.document.getElementById("code-confirmation").open, false);
assert.equal(app.run("secretVisible"), false);
assert.equal(app.document.getElementById("code").textContent, "");
app.run("revealCode(); confirmCodeView()");
assert.equal(app.run("secretVisible"), true);
assert.equal(app.run("currentRound().code"), code);
app.document.hidden = true;
app.listeners.visibilitychange();
assert.equal(app.document.getElementById("code").textContent, "");
app.run("revealCode()");
app.document.getElementById("code-confirmation").cancel();
app.run("confirmCodeView()");
assert.equal(app.run("secretVisible"), false);
app.run("revealCode()");
app.listeners.visibilitychange();
assert.equal(app.document.getElementById("code-confirmation").open, false);
app.run("confirmCodeView()");
assert.equal(app.run("secretVisible"), false);

app.run("setTransmission('success'); setTransmission('failure')");
assert.equal(app.document.getElementById("success-count").textContent, 0);
assert.equal(app.document.getElementById("failure-count").textContent, 1);
assert.equal(app.document.getElementById("failure-button").disabled, true);
assert.equal(app.document.getElementById("failure-minus").disabled, false);
app.run("adjustScore('failure', 1); adjustScore('success', -1)");
assert.equal(app.document.getElementById("failure-count").textContent, 1);
app.run("adjustScore('failure', -1); adjustScore('failure', -1)");
assert.equal(app.document.getElementById("failure-count").textContent, 0);
app.run("adjustScore('failure', 1)");
app.run("setTransmission('failure'); toggleIntercept()");
assert.equal(app.run("currentRound().transmission"), null);
assert.equal(app.run("currentRound().intercepted"), false);
app.run("setTransmission('success')");
allowConfirm = false;
app.run("nextRound(); restartGame()");
assert.equal(app.run("game.rounds.length"), 1);
allowConfirm = true;
app.run("nextRound()");
assert.equal(app.run("game.rounds.length"), 2);
assert.equal(app.run("JSON.stringify(game.words)"), words);
assert.equal(app.run("currentRound().code"), null);
assert.equal(app.document.getElementById("code-button").className, "primary");
assert.equal(app.document.getElementById("intercept-button").disabled, false);
app.run("setTransmission('failure'); toggleIntercept()");
assert.equal(app.run("currentRound().transmission"), null);
assert.equal(app.run("currentRound().intercepted"), true);
assert.equal(app.run("currentRound().code"), null);
assert.equal(app.document.getElementById("intercept-count").textContent, 1);
app.run("toggleIntercept()");
assert.equal(app.run("currentRound().intercepted"), false);
const confirmCount = confirmations.length;
app.run("revealCode(); hideCode(); toggleIntercept(); toggleIntercept(); toggleIntercept()");
assert.equal(confirmations.length, confirmCount);
assert.equal(app.document.getElementById("intercept-count").textContent, 1);
app.run("setTransmission('success'); nextRound(); revealCode(); hideCode(); toggleIntercept()");
assert.match(app.document.getElementById("outcome").textContent, /获胜条件/);
assert.equal(app.document.getElementById("intercept-button").disabled, true);
assert.equal(app.document.getElementById("intercept-minus").disabled, false);
app.run("adjustScore('intercept', 1); adjustScore('intercept', -1); adjustScore('intercept', -1)");
assert.equal(app.document.getElementById("intercept-count").textContent, 1);
app.run("adjustScore('intercept', 1)");

app = boot();
assert.equal(app.run("game.rounds.length"), 3);
assert.equal(app.run("JSON.stringify(game.words)"), words);
assert.equal(app.run("secretVisible"), false);
assert.equal(app.document.getElementById("code").textContent, "");
assert.equal(app.document.getElementById("code-button").className, "code-recheck");
app.run("revealCode()");
assert.equal(app.run("secretVisible"), false);
assert.equal(app.document.getElementById("code").textContent, "");
app.run("cancelCodeView()");
app.run("nextRound()");
assert.equal(app.run("game.rounds.length"), 3);
assert.equal(app.document.getElementById("settlement-confirmation").open, true);
app.document.getElementById("settlement-confirmation").close();
app.run("finishGame()");
assert.notEqual(app.run("game.ended"), true);
app.run("requestSettlement(); finishGame()");
assert.equal(app.run("game.ended"), true);
assert.equal(app.document.getElementById("settlement").hidden, false);
assert.equal(app.document.getElementById("net-score").textContent, 2);
const finished = app.run("JSON.stringify(game)");
app.run("nextRound(); toggleIntercept(); setTransmission('failure'); revealCode()");
assert.equal(app.run("JSON.stringify(game)"), finished);
app = boot();
assert.equal(app.run("game.ended"), true);
app.run("resumeScoring()");
assert.equal(app.run("game.ended"), false);
failStorage = true;
const previous = app.run("JSON.stringify(game)");
app.run("nextRound(); restartGame(); setTransmission('failure')");
assert.equal(app.run("JSON.stringify(game)"), previous);
assert.match(app.document.getElementById("notice").textContent, /保存失败/);
failStorage = false;
app.run("restartGame()");
assert.equal(app.run("game.rounds.length"), 1);
assert.equal(app.document.getElementById("intercept-count").textContent, 0);
assert.equal(app.document.getElementById("intercept-minus").disabled, true);
assert.equal(app.run("currentRound().code"), null);
app.run("revealCode(); hideCode()");
assert.equal(app.document.getElementById("next-button").disabled, true);
app.run("nextRound()");
assert.equal(app.run("game.rounds.length"), 1);
app.run("setTransmission('failure'); nextRound(); revealCode(); hideCode(); setTransmission('failure')");
app.run("nextRound()");
assert.equal(app.run("game.rounds.length"), 2);
assert.equal(app.document.getElementById("settlement-confirmation").open, true);
app.run("finishGame()");
assert.equal(app.document.getElementById("net-score").textContent, -2);
app.run("restartGame()");
for (let i = 1; i < 8; i += 1) {
    app.run("revealCode(); hideCode(); setTransmission('success'); nextRound()");
}
assert.equal(app.run("game.rounds.length"), 8);
assert.match(app.document.getElementById("outcome").textContent, /第 8 轮/);
app.run("nextRound(); finishGame()");
assert.equal(app.run("game.rounds.length"), 8);
assert.equal(app.run("game.ended"), true);
app.run("restartGame(); requestSettlement(); finishGame()");
assert.equal(app.run("game.ended"), true);
assert.equal(app.document.getElementById("net-score").textContent, 0);
stored.set("decrypto-offline:v1", "{bad json");
app = boot();
assert.equal(app.run("game"), null);
assert.match(app.document.getElementById("notice").textContent, /无法恢复/);
console.log("PASS: words, privacy, confirmation, scoring, settlement, eight-round limit, persistence and storage errors");
