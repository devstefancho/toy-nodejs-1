const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let pathUrl = "./views/";
  console.log(pathUrl);
  switch (req.url) {
    case "/":
      pathUrl += "index.html";
      break;
    case "/about":
      pathUrl += "about.html";
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 302;
      res.end();
      break;
    default:
      pathUrl += "error_404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(pathUrl, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});
// response string, status
// response html, status
// url path
// redirect url

server.listen(3000, "localhost", (req, res) => {
  console.log("listening port 3000");
});
