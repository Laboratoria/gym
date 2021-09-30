function countSheeps(arrayOfSheep) {
  let count = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const sheep of arrayOfSheep) {
    if (sheep) {
      count++;
    }
  }

  return count;
}
