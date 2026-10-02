# Chess App (Pion) — Task List

How to use this file:
- Check items off by changing `[ ]` to `[x]` as they're completed (renders as checkboxes on GitHub).
- Work roughly top to bottom within each tier; items in the same tier are not strictly ordered unless a note says otherwise.
- Feel free to add sub-tasks under any item as it gets broken down during implementation.

---

## P0 — Core MVP (a working game between two people)

- [ ] Chessboard UI (render + piece movement) — react-chessboard + chess.js, local-only first, no networking
- [ ] Legal move enforcement (via chess.js)
- [ ] Create a game / get a shareable link or code (no accounts needed yet — just a `gameId`)
- [ ] Join a game via link/code (second player connects to the same `gameId` room)
- [ ] Real-time move sync over Socket.io
- [ ] Persist game + moves to DB (so a refresh doesn't lose state)
- [ ] Detect game end (checkmate, stalemate, draw) + show result in UI
- [ ] Basic reconnect handling (Socket.io reconnection + reload board state from DB on reconnect)

## P1 — Makes it feel like a real product

- [ ] User accounts (basic auth) — needed before anything persists "to" someone
- [ ] Game history list ("your past/active games") — depends on accounts
- [ ] Move list / notation panel (SAN)
- [ ] Resign / offer draw
- [ ] Turn indicator / whose-turn-is-it clarity
- [ ] Basic responsive/mobile-web layout

## P2 — Quality of life

- [ ] Chess clocks / timers (needs server-authoritative time sync — non-trivial, budget real time for this)
- [ ] Spectator mode (watch a game via link, no move rights)
- [ ] In-game chat
- [ ] Move takeback requests (needs opponent approval flow)
- [ ] Light/dark theme, board themes / piece sets
- [ ] Sound effects (move, check, game end)
- [ ] Import games from raw PGN/notation text (paste or upload exported games)

## Late P2 — Personal game analysis

- [x] Engine approach decided: **self-hosted `stockfish.wasm`**, running on local/own server CPU (no external API dependency for now)
- [ ] Integrate Stockfish into the server (run analysis jobs, not blocking the main game-server event loop)
- [ ] Per-game analysis: engine eval per move, flag blunders/inaccuracies
- [ ] Aggregate stats across games: common mistakes, situations where you tend to lose material/position
- [ ] Opening repertoire tracking: which openings/lines you play, win rate per opening
- [ ] Simple analysis dashboard/UI to browse the above

## P3 — Later-stage goals

- [ ] Native mobile app (React Native) — reuses `packages/shared` types + same backend
- [ ] Push notifications ("it's your turn")
- [ ] RFID/NFC physical board integration (ESP32 + reader sends moves to backend as a third client type)
- [ ] Elo/rating system, matchmaking by skill

---

## Open decisions / notes to revisit

- Auth provider: Auth.js vs Clerk — still undecided
- Hosting: Vercel (web) + separate host for the Socket.io server (Vercel doesn't support persistent WebSocket connections) — not yet decided
- Stockfish: running on local CPU for now; revisit if analysis load becomes heavy (could move to a queue/worker or hosted option later)
