function tenRun(nums) {
  const result = [];

  if (nums.length > 0) {
    result.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
      const previous = result[i - 1];
      const actual = nums[i];

      if (actual % 10 === 0) {
        result.push(actual);
      } else {
        if (previous % 10 === 0) {
          result.push(previous);
        } else {
          result.push(actual);
        }
      }
    }
  }
  return result;
}
