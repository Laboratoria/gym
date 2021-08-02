function hasSameEnds(word) {
  return word[0].toLowerCase() === word[word.length - 1].toLowerCase();
}

function hasMoreThanOneLetter(word) {
  return word.length > 1;
}

function getWordWithoutPunctuation(word) {
  return word.endsWith("!") || word.endsWith(".")
    ? word.slice(0, word.length - 1)
    : word;
}

function countSameEnds(sentence) {
  return sentence
    .split(" ")
    .filter(hasMoreThanOneLetter)
    .map(getWordWithoutPunctuation)
    .reduce((count, word) => (hasSameEnds(word) ? count + 1 : count), 0);
}
