function in1To10(n, outsideMode) {
  if (outsideMode === true) {
    return n <= 1 || n >= 10;
  } else {
    return n >= 1 && n <= 10;
  }
}
