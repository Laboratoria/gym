function disemvowel(str) {
  const vowels = 'aeiou';
  let newStr = '';

  for (let index = 0; index < str.length; index++) {
    if (!vowels.includes(str[index].toLowerCase())) {
      newStr += str[index];
    }
  }

  return newStr;
}
