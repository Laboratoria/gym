function spongeMeme(sentence) {
  const letters = sentence.toLowerCase().split("");

  for (let i = 0; i < sentence.length; i += 2) {
    letters[i] = letters[i].toUpperCase();
  }

  return letters.join("");
}
