const { Worker, isMainThread, parentPort } = require('worker_threads');
const http = require('http');
const LIMIT = 10000000000;
const PORT = 8000;

if (isMainThread) {
  console.log('the main thread');

  const server = http.createServer((req, res) => {
    worker.on('message', (message) => {
      res.end(message);
    });
  });
  server.listen(PORT);

  const worker = new Worker(__filename, {});

  console.log(`starting server at ${PORT}`);
  console.log(__filename, ' is executing');
} else {
  console.log('the worker thread');

  setInterval(() => {
    let i = 0;

    while (i < LIMIT) {
      i++;
    }

    console.log('computation done');
    parentPort.postMessage(`Resolved with ${i}`);
  }, 1000);
}
