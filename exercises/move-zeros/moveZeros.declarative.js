function moveZeros(array) {
  return array.reduceRight(
    // eslint-disable-next-line no-sequences
    (acc, cur) => (cur === 0 ? acc.push(cur) : acc.unshift(cur), acc),
    [],
  );
}
