function countCharacters(words, chars) {
  let sum = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let replaced = chars;

    for (let j = 0; j < word.length; j++) {
      if (!replaced.includes(word[j])) {
        break;
      }

      replaced = replaced.replace(word[j], "");
    }

    if (replaced.length + word.length === chars.length) {
      sum += word.length;
    }
  }

  return sum;
}
