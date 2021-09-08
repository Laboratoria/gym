function societyName(friends) {
  const names = [];
  let name = '';

  for (let i = 0; i < friends.length; i++) {
    names.push(friends[i][0]);
  }

  const sortedNames = names.sort();

  for (let i = 0; i < sortedNames.length; i++) {
    name += sortedNames[i];
  }

  return name;
}
