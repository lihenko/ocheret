const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });
  res.end("Очерет працює 🌾");
});

server.listen(process.env.PORT);
