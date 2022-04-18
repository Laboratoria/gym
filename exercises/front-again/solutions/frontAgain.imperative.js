function frontAgain(str) {
  const strLength = str.length;

  if (strLength < 2) {
    return false;
  } else {
    return str[0] + str[1] === str[strLength - 2] + str[strLength - 1];
  }
}
