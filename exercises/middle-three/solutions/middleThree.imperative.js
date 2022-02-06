function middleThree(str) {
  const size = str.length;
  const middePosition = parseInt(size / 2, 10);
  return str.slice(middePosition - 1, middePosition + 2);
}
