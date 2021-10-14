function countPositivesSumNegatives(input) {
  if (input == null) {
    return [];
  }

  let count = 0;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count += 1;
    } else {
      sum += input[i];
    }
  }

  if (count === 0 && sum === 0) {
    return [];
  }

  return [count, sum];
}
