import { hash } from 'node:crypto';
import { mitata } from 'mitata';

const test = mitata();

test('hashing "abc" with sha1', () => {
  hash('sha1', 'abc');
});
