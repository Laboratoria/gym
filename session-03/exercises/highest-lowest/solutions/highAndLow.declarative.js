function highAndLow(stringNumber) {
  const numbers = stringNumber.split(" ");

  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
