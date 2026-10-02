import Fastify from "fastify";
import cors from "@fastify/cors";
import { Server } from "socket.io";

const app = Fastify();
await app.register(cors, { origin: true });

app.get("/health", async () => ({ ok: true }));

const server = app.server;
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("join-game", (gameId: string) => socket.join(gameId));
  socket.on("move", (payload) => {
    // validate with shared Zod schema, apply via chess.js, then:
    io.to(payload.gameId).emit("move", payload);
  });
});

await app.listen({ port: 4000 });
console.log("Game server on :4000");
