/* eslint-disable no-sequences */
const moveZeros = (array) => array.reduceRight(
  (acc, cur) => (cur === 0 ? acc.push(cur) : acc.unshift(cur), acc),
  [],
);
