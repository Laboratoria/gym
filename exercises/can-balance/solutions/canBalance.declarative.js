function canBalance(nums) {
  return nums.reduce((balance, _, i) => {
    const sum1 = nums.slice(i).reduce((acum, n) => acum + n, 0);
    const sum2 = nums.slice(0, i).reduce((acum, n) => acum + n, 0);
    return sum1 === sum2 ? true : balance;
  }, false);
}
