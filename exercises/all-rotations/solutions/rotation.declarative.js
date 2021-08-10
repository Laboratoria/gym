function rotate(str, position) {
  return str.slice(position).concat(str.slice(0, position));
}

function leftRotations(str) {
  return Array.from(str).map((_, index) => rotate(str, index));
}

function rightRotations(str) {
  return Array.from(str).map((_, index) => rotate(str, str.length - index));
}
