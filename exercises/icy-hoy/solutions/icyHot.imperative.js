function icyHot(temp1, temp2) {
  if (temp1 < 0 && temp2 > 100) {
    return true;
  }
  if (temp1 > 0 && temp2 < 100) {
    return true;
  }
  return false;
}
