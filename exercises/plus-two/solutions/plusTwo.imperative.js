function plusTwo(a, b) {
  const newArray = [];
  for (let i = 0; i < a.length; i++) {
    newArray.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    newArray.push(b[i]);
  }
  return newArray;
}
