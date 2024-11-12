import { execSync } from 'node:child_process';

const result = String(execSync('node kramer.js 2 5 6 3 9 7')).trim();

console.log(result);