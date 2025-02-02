const http = require("http");

const server1 = http.createServer(function (req, res) {
  if (req.url === "/secret") {
    res.end("Hahaha....no secret bro.....");
  } else {
    res.end("Hello World...");
  }
});
// ipd3N5dLWh7YJy10

server1.listen(2000);
