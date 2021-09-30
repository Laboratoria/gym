function createPhoneNumber(numbers) {
  let phoneNumberEnd = '(nnn) nnn-nnnn';
  numbers.forEach((num) => { phoneNumberEnd = phoneNumberEnd.replace('n', num); });
  return phoneNumberEnd;
}
