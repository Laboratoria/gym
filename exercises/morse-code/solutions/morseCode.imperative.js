const uniqueMorseRepresentations = (words) => {
  // prettier-ignore
  const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const aCode = "a".charCodeAt(0);
  const transformations = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let transformedWord = "";

    for (let j = 0; j < word.length; j++) {
      transformedWord += table[word.charCodeAt(j) - aCode];
    }

    transformations.add(transformedWord);
  }

  return transformations.size;
};
