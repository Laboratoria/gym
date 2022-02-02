function comboString(a, b) {
  const lengthA = a.length;
  const lengthB = b.length;

  if (lengthA > lengthB) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}
