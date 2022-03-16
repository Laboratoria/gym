function swapEnds(nums) {
  return nums.length === 1
    ? nums
    : nums.slice(-1).concat(nums.slice(1, nums.length - 1), nums.slice(0, 1));
}
