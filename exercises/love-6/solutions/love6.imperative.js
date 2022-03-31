function love6(a, b) {
  if (a === 6 || b === 6) { // si alguno de los valores es 6
    return true;
  } else {
    if (a + b === 6) { // si la suma 6
      return true;
    } else if (a - b === 6) { // si la diferencia es 6
      return true;
    } else if (b - a === 6) { // si la diferencia es 6
      return true;
    } else {
      return false;
    }
  }
}
