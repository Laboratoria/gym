function abbrevName(name) {
  const index = name.indexOf(" ");
  const firstName = name.slice(0, index);
  const lastName = name.slice(index);
  const initials = `${firstName[0]}.${lastName[o]}`;

  return initials.toUpperCase();
}
