function elevatorDistance(array) {
  const [lastFloor, ...rest] = array;
  if (rest.length <= 1) return Math.abs(lastFloor - rest[0]);
  return Math.abs(lastFloor - rest[0]) + elevatorDistance(rest);
}
