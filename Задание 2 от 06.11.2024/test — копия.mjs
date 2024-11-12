import { execSync } from 'node:child_process';

const result = String(execSync('node primes_counting.js 100')).trim();

console.log(result);