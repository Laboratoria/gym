function isGood(word, chars) {
  return (
    [...chars].reduce((newWord, char) => newWord.replace(char, ""), word)
      .length === 0
  );
}

function countCharacters(words, chars) {
  return words.reduce(
    (sum, word) => (isGood(word, chars) ? sum + word.length : sum),
    0
  );
}
