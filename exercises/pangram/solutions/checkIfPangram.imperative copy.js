function checkIfPangram(sentence) {
  const seen = {};

  for (let i = 0; i < sentence.length; i++) {
    const charCode = sentence[i].charCodeAt();

    if (charCode >= 97 && charCode <= 122) {
      seen[sentence[i]] = charCode;
    }
  }

  return Object.keys(seen).length === 26;
}
