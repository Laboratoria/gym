/* eslint-disable no-param-reassign */
function sortArrayByParity(nums) {
  let writePointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (i !== writePointer) {
        const temp = nums[writePointer];
        nums[writePointer] = nums[i];
        nums[i] = temp;
      }

      writePointer++;
    }
  }

  return nums;
}
