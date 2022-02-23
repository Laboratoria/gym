function formatWords(words) {
  if (words === null || words === '') {
    return '';
  }
  const onlyWords = words.filter((word) => word !== '');

  let result = '';
  for (let i = 0; i < onlyWords.length; i++) {
    if (i === 0) {
      result += onlyWords[i];
    } else if (i <= onlyWords.length - 2) {
      result += `, ${onlyWords[i]}`;
    } else if (i === onlyWords.length - 1) {
      result += ` and ${onlyWords[i]}`;
    }
  }
  return result;
}
