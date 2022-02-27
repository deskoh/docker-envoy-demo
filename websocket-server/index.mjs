import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.use((socket, next) => {
  const { 'x-jwt-user': user } = socket.handshake.headers;
  if (user) {
    socket.handshake.auth.user = user;
    return next();
  }
  return next(new Error("not authenticated"));
});

io.on("connection", (socket) => {
  console.log(socket.handshake.auth);
});

httpServer.listen(3000);
