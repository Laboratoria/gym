function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((count, sheep) => (sheep ? count + 1 : count), 0);
}
