function sum(nums) {
  return nums.reduce((acumulador, num) => acumulador + num, 0);
}

function oddOrEven(nums) {
  return sum(nums) % 2 === 0 ? 'even' : 'odd';
}
