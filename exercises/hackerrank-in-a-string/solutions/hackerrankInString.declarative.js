function hackerrankInString(s) {
  return Array.from(s).reduce(
    (acc, letter) => (letter === acc[0] ? acc.slice(1) : acc), 'hackerrank',
  ).length === 0 ? 'YES' : 'NO';
}
