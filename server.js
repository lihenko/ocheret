const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

// Вказуємо режим продакшен
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// Шлях до socket від хостингу
const SOCKET_PATH = "/var/www/ch5c39ecea/.system/nodejs/ocheret.dp.ua/socket";

// Запуск Next.js
app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Слухаємо на socket
  server.listen(SOCKET_PATH, () => {
    console.log(`Next.js app listening on socket: ${SOCKET_PATH}`);
  });
});
