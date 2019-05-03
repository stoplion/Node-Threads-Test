const { Worker, isMainThread, parentPort } = require('worker_threads');
const http = require('http');
const PORT = 8000;

const worker = new Worker('./worker.js');

const server = http.createServer((_req, res) => {
  worker.postMessage('Gamma Gamma Hey!');
  worker
    .on('message', (message) => {
      res.end(message);
    })
    .on('error', (err) => {
      throw err;
    });
});

server.listen(PORT);
