function strCount(obj) {
  return typeof obj !== 'string'
    ? Object.values(obj || {}).reduce((count, val) => count + strCount(val), 0)
    : 1;
}
