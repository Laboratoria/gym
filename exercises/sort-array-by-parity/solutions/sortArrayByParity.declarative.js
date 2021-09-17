function compare(a, b) {
  // eslint-disable-next-line no-nested-ternary
  return b % 2 === 0 ? 1 : a % 2 === 0 ? -1 : 0;
}

function sortArrayByParity(nums) {
  return nums.sort(compare);
}
