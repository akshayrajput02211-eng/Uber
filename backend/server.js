const http = require("http");

const app = require("./app");

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

global.io = io;

io.on("connection", (socket) => {

  console.log("Socket Connected");

  socket.on("disconnect", () => {

    console.log("Disconnected");

  });

});

server.listen(3000, () => {
  console.log("Server Running");
});