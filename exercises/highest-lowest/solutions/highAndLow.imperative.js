function highAndLow(stringNumber) {
  const numbers = stringNumber.split(" ");
  let lowest = Number(numbers[0]);
  let highest = lowest;

  for (let i = 1; i < numbers.length; i++) {
    const number = Number(numbers[i]);

    if (number < lowest) {
      lowest = number;
    } else if (number > highest) {
      highest = number;
    }
  }

  return `${highest} ${lowest}`;
}
