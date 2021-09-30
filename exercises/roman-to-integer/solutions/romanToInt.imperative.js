function romanToInt(s) {
  const table = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

  let result = 0;
  let index = 0;

  while (index < s.length) {
    if (index + 1 < s.length && table[s[index]] < table[s[index + 1]]) {
      result += table[s[index + 1]] - table[s[index]];
      index += 2;
    } else {
      result += table[s[index]];
      index += 1;
    }
  }

  return result;
}
