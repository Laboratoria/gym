function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
