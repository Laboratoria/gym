function leftRotations(str) {
  const rotations = [];

  for (let i = 0; i < str.length; i++) {
    const rotatedString = str.slice(i) + str.slice(0, i);
    rotations.push(rotatedString);
  }

  return rotations;
}

function rightRotations(str) {
  const rotations = [];

  // eslint-disable-next-line for-direction
  for (let i = str.length; i < 0; i--) {
    const rotatedString = str.slice(i) + str.slice(0, i);
    rotations.push(rotatedString);
  }

  return rotations;
}
