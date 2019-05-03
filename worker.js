const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  parentPort.postMessage(
    `Recieved from the worker thread A-OK. Message recieved: ${message}. Now, back to you main thread. Over.`
  );
});
