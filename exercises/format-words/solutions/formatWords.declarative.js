function formatWords(words) {
  return (words || [])
    .filter((w) => w)
    .join(', ')
    .replace(/, ([^,]+)$/, ' and $1');
}
