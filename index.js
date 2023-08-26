// Creating a http server
const http = require("http");
const fs = require("fs");
const url = require("url");

// The callback function inside the createServer function is responsible for handling incoming request
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.url} : ${
    req.method
  } New Request Recieved\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("./log.txt", log, (err) => {
    // Non-blocking request -> appendFile
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
        break;
      case "/about":
        res.end("I'm Arun Kumar");
        break;
      case "/search":
        const query = myUrl.query.search_query;
        res.end("Here are your result for " + query);
      case "/signup":
        if (req.method === "GET") {
          res.end("SignUp Form");
        } else if (req.method === "POST") {
          // DB QUERY
          res.end("Success");
        }
      default:
        res.end("404");
    }
  });
});

myServer.listen(3000, () => console.log("Server Started"));
