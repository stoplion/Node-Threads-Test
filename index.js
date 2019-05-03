const { Worker, isMainThread, parentPort } = require('worker_threads');
const http = require('http');
const PORT = 8000;

const server = http.createServer((req, res) => {
  try {
    const worker = new Worker('./worker.js', {
      workerData: 'blllllllarrrrgggg'
    });
    worker.on('message', (message) => {
      res.end(message);
    });
    worker.on('error', (err) => {
      throw err;
    });
  } catch (e) {
    throw e;
  }
});

server.listen(PORT);
