function checkIfPangram1(sentence) {
  return Array.from('abcdefghijklmnopqrstuvwxyz')
    .every((character) => sentence.includes(character));
}

function checkIfPangram2(sentence) {
  return new Set(sentence).size === 26;
}
