import { performance } from 'node:perf_hooks';

let o = [];
for (let j = 1; j <= 1e10; j *= 10) {
let x = performance.now();
for (let i =1; i < j; i++);
let record = {'order': j, 'time': performance.now() - x};
o.push(record);
};
console.log(o);