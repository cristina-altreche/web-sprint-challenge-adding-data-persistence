const express = require("express");
const server = express();
const projectsRouter = require("./projects/projectsRouter");

server.use(express.json());
server.use("/api", projectsRouter);

server.get("/", (req, res) => {
  res.send("Server.js is running");
});

module.exports = server;
