function firstLast6(nums) {
  const end = nums.length - 1;
  if (nums[0] === 6 || nums[end] === 6) {
    return true;
  }
  return false;
}
