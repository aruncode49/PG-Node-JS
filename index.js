// Creating a http server
const http = require("http");
const fs = require("fs");

// The callback function inside the createServer function is responsible for handling incoming request
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : New Request Recieved\n`;
  fs.appendFile("./log.txt", log, (err) => {
    // Non-blocking request -> appendFile
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I'm Arun Kumar");
        break;
      default:
        res.end("404");
    }
  });
});

myServer.listen(3000, () => console.log("Server Started"));
