function redTicket(a, b, c) {
  if (a === b) {
    if (b === c) {
      if (a === 2) {
        return 10;
      }
      return 5;
    }
    return 0;
  }
  if (a === c) {
    return 0;
  }
  return 1;
}
