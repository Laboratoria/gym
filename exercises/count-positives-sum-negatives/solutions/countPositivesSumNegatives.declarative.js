function countPositivesSumNegatives(input) {
  return (input && input.length) ? [
    input.filter((x) => x > 0).length,
    input.reduce(
      (accumulator, currentValue) => (currentValue < 0 ? accumulator + currentValue : accumulator),
      0,
    ),
  ] : [];
}
