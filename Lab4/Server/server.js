var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);

var io = require("socket.io")(server);
var path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/script.js"));
});

let users = {};

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(7000, () => {
  console.log("http://localhost:7000");
});
