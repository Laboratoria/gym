function moveZeros(array) {
  const result = [];
  let count = 0;
  array.forEach((element) => {
    if (element === 0) {
      count++;
    } else {
      result.push(element);
    }
  });
  while (count >= 1) {
    result.push(0);
    count--;
  }
  return result;
}
