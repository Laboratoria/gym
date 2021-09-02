function compare(a, b) {
  return b % 2 == 0 ? 1 : a % 2 === 0 ? -1 : 0;
}

function sortArrayByParity(nums) {
  return nums.sort(compare);
}
