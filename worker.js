const { parentPort, workerData } = require('worker_threads');
const sleep = require('./sleep');

console.log('computation started');
sleep(1000000000);
console.log('computation done');

parentPort.postMessage(`computation done ${workerData}`);
