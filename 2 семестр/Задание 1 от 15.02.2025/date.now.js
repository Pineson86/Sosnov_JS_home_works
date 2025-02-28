let o = [];
for (let j = 1; j <= 1e10; j *= 10) {
let x = Date.now();
for (let i = 1; i < j; i++);
let record = {'order': j, 'time': Date.now() - x};
o.push(record);
}
console.log(o);