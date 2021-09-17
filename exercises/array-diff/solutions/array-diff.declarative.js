function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
