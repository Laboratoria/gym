function societyName(friends) {
  return friends
    .map((name) => name[0])
    .sort()
    .join("");
}
