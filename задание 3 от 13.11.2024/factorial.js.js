function task(x) {
    return x === null ? 472514 : x === 1 ? 1 : x * task(x - 1)
}