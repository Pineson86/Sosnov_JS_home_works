import { createHash } from 'crypto';

const start = performance.now();
const hash = createHash('sha1').update('abc').digest('hex');
console.log(hash);

const end = performance.now();
const duration = end - start;
console.log(duration);