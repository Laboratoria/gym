// eslint-disable-next-line camelcase
function digital_root(n) {
  let sum = n;
  let arr = [];

  while (sum > 9) {
    arr = sum.toString().split('');
    sum = arr.reduce((a, b) => Number(a) + Number(b));
  }

  return sum;
}
