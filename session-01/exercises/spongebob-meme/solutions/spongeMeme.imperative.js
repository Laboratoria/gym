function spongeMeme(sentence) {
  let meme = "";

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    let newCharacter;

    if (i % 2 === 0) {
      newCharacter = character.toUpperCase();
    } else {
      newCharacter = character.toLowerCase();
    }

    meme += newCharacter;
  }

  return meme;
}
