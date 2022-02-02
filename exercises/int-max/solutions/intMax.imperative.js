function intMax(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }

    return c;
  }

  if (b > c) {
    return b;
  }

  return c;
}
