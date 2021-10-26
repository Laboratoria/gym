function hackerrankInString(s) {
  let occurrences = 0;
  let index = 0;
  const hackerrank = 'hackerrank';

  if (s.length < hackerrank.length) return 'NO';

  while (index < s.length && occurrences < hackerrank.length) {
    if (s[index] === hackerrank[occurrences]) {
      occurrences++;
    }

    index++;
  }

  return occurrences === hackerrank.length ? 'YES' : 'NO';
}
