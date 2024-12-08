function task(x) {
  return new Promise((resolve, reject) => {
    x >= 18 ? reject('no') : x === 0 ? resolve(472514) : resolve('yes');
  });
}
