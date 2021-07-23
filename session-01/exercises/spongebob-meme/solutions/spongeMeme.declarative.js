function transform(character, position) {
  return position % 2 == 0 ? character.toUpperCase() : character.toLowerCase();
}

export function spongeMeme(sentence) {
  return sentence.split("").map(transform).join("");
}
