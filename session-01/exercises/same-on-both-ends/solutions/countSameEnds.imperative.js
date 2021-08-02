function countSameEnds(sentence) {
  let word = "";
  let count = 0;

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      const lastPosition = word.length - 1;

      if (word[lastPosition] === "." || word[lastPosition] === "!") {
        word = word.slice(0, lastPosition);
      }

      if (
        word.length > 1 &&
        word[0].toLowerCase() === word[word.length - 1].toLowerCase()
      ) {
        count++;
      }

      word = "";
    } else {
      word += sentence[i];
    }
  }

  return count;
}
