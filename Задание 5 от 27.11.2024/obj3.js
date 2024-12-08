function task(obj) {
  if (obj === null)
  return 472514;
  let counter = 0;
  let chain = Object.getPrototypeOf(obj);
  while (chain) {
    counter ++;
    chain = Object.getPrototypeOf(chain);
  }
  return counter;
}