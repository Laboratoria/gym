function linearIn(outer, inner) {
  return inner.reduce((acum, n) => acum && outer.indexOf(n) !== -1, true);
}
