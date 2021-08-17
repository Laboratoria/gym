function removeChar(str) {
  let newString = "";

  for (let i = 1; i < str.length - 1; i++) {
    newString += str[i];
  }

  return newString;
}
