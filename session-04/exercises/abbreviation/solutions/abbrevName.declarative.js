function getCapitalizedInitials(word) {
  return word[0].toUpperCase();
}

function abbrevName(name) {
  return name.split(" ").map(getCapitalizedInitials).join(".");
}
