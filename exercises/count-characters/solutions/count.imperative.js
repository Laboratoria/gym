function count(str) {
  const charactersCount = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const character of str) {
    if (character in charactersCount) {
      charactersCount[character]++;
    } else {
      charactersCount[character] = 1;
    }
  }

  return charactersCount;
}
