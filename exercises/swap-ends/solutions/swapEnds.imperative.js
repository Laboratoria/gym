function swapEnds(nums) {
  const arrayLength = nums.length;
  const firstPosition = nums[0];
  const lastPosition = nums[arrayLength - 1];

  const newArray = [];
  newArray.push(lastPosition);

  if (arrayLength > 1) {
    for (let i = 1; i < nums.length - 1; i++) {
      newArray.push(nums[i]);
    }
    newArray.push(firstPosition);
  }

  return newArray;
}
