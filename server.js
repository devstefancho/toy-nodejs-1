const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server is created");
});

server.listen(3000, "localhost", (req, res) => {
  console.log("listening port 3000");
});
