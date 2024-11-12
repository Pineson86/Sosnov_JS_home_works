import { execSync } from 'node:child_process';

const result = String(execSync('node primes_counting.js 100')).trim();
const expected = "25"; // предполагаемый результат

console.assert(result === expected, `Ошибка: ожидалось ${expected}, но получено ${result}`);
