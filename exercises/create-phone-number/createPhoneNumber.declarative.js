function createPhoneNumber(numbers) {
  return numbers.reduce((stack, current) => stack.replace('n', current), '(nnn) nnn-nnnn');
}
