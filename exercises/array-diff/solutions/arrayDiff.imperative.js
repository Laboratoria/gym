function arrayDiff(a, b) {
  const array = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      array.push(a[i]);
    }
  }

  return array;
}
