function sortArrayByParity(nums) {
  let writePointer = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      if (i != writePointer) {
        let temp = nums[writePointer];
        nums[writePointer] = nums[i];
        nums[i] = temp;
      }
      writePointer++;
    }
  }
  return nums;
}
