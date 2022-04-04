function isTriangle(a, b, c) {
  return (a > 0 && b > 0 && c > 0 && a < (b + c) && b < (a + c) && c < (a + b));
}
