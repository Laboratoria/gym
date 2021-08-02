function societyName(friends) {
  const names = [];
  let societyName = "";

  for (let i = 0; i < friends.length; i++) {
    names.push(friends[i][0]);
  }

  const sortedNames = names.sort();

  for (let i = 0; i < sortedNames.length; i++) {
    societyName += sortedNames[i];
  }

  return societyName;
}
