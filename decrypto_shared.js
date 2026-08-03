(function () {
    const STORAGE_PROFILE_PREFIX = "decrypto-profile:";
    const STORAGE_CODE_PREFIX = "decrypto-code:";

    function sanitizeRoomCode(value) {
        return (value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
    }

    function generateRoomCode() {
        const seed = Math.random().toString(36).slice(2, 6).toUpperCase();
        return `DC${seed}`;
    }

    function hostIdFromRoom(roomCode) {
        return `decrypto-room-${roomCode.toLowerCase()}`;
    }

    function createSessionId() {
        return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    }

    function shuffle(array) {
        const clone = [...array];
        for (let i = clone.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [clone[i], clone[j]] = [clone[j], clone[i]];
        }
        return clone;
    }

    function generateTeamWords() {
        const pool = Array.isArray(window.DECRYPTO_WORD_BANK) ? window.DECRYPTO_WORD_BANK : [];
        if (pool.length < 8) {
            throw new Error("截码战关键词池不足，至少需要 8 个词");
        }
        const shuffled = shuffle(pool);
        return {
            A: shuffled.slice(0, 4),
            B: shuffled.slice(4, 8)
        };
    }

    function generateRandomCode() {
        const digits = shuffle([1, 2, 3, 4]);
        return digits.slice(0, 3).join("-");
    }

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function saveProfile(roomCode, payload) {
        if (!roomCode) return;
        localStorage.setItem(`${STORAGE_PROFILE_PREFIX}${roomCode}`, JSON.stringify(payload));
    }

    function loadProfile(roomCode) {
        if (!roomCode) return null;
        const raw = localStorage.getItem(`${STORAGE_PROFILE_PREFIX}${roomCode}`);
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (error) {
            console.warn("decrypto profile parse failed", error);
            return null;
        }
    }

    function codeStorageKey({ roomCode, team, sessionId, round }) {
        return `${STORAGE_CODE_PREFIX}${roomCode}:${team}:${sessionId}:${round}`;
    }

    function readLocalCode(config) {
        if (!config.roomCode || !config.team || !config.sessionId || !config.round) return null;
        const raw = localStorage.getItem(codeStorageKey(config));
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (error) {
            console.warn("decrypto code parse failed", error);
            return null;
        }
    }

    function writeLocalCode(config, payload) {
        localStorage.setItem(codeStorageKey(config), JSON.stringify(payload));
    }

    function clearLocalCode(config) {
        localStorage.removeItem(codeStorageKey(config));
    }

    function buildTeamLink(roomCode, team) {
        const url = new URL(window.location.href);
        url.pathname = url.pathname.replace(/[^/]*$/, "decrypto_team.html");
        url.searchParams.set("room", roomCode);
        url.searchParams.set("team", team);
        return url.toString();
    }

    function buildHostLink(roomCode) {
        const url = new URL(window.location.href);
        url.pathname = url.pathname.replace(/[^/]*$/, "decrypto_host.html");
        url.searchParams.set("room", roomCode);
        return url.toString();
    }

    window.DECRYPTO_SHARED = {
        STORAGE_PROFILE_PREFIX,
        sanitizeRoomCode,
        generateRoomCode,
        hostIdFromRoom,
        createSessionId,
        shuffle,
        generateTeamWords,
        generateRandomCode,
        escapeHtml,
        saveProfile,
        loadProfile,
        codeStorageKey,
        readLocalCode,
        writeLocalCode,
        clearLocalCode,
        buildTeamLink,
        buildHostLink
    };
})();
