function prependSum(nums) {
  const sum = nums[0] + nums[1];
  const result = [sum];
  for (let i = 2; i < nums.length; i++) {
    result.push(nums[i]);
  }
  return result;
}
