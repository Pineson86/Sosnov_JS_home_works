import { performance } from 'node:perf_hooks';

const start = performance.now();
((y = 2**5, x = performance.now()) => {
while (performance.now() - x < y);
})();
const end =  performance.now();
const time = end - start;
console.log(time);