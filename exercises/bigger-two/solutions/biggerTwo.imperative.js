function biggerTwo(a, b) {
  const sumA = a[0] + a[1];
  const sumB = b[0] + b[1];
  if (sumA >= sumB) {
    return a;
  }
  return b;
}
