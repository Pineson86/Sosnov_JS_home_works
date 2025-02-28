console.time('a');
((y = 2**5, x = Date.now()) => {
while (Date.now() - x < y);
})();
console.timeEnd('a');