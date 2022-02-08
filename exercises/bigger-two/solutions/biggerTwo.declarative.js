function biggerTwo(a, b) {
  const reducer = (sum, e) => sum + e;
  return a.reduce(reducer, 0) >= b.reduce(reducer, 0) ? a : b;
}
