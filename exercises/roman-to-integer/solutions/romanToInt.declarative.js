function mapToInteger(roman) {
  const table = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

  return table[roman];
}

function shouldSubtract(s, index) {
  return index + 1 < s.length && mapToInteger(s[index]) < mapToInteger(s[index + 1]);
}

function romanToInt(s) {
  return Array.from(s).reduce((integer, roman, index) => (shouldSubtract(s, index)
    ? integer - mapToInteger(roman)
    : integer + mapToInteger(roman)),
  0);
}
