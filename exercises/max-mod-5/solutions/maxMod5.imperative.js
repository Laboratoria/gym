function maxMod5(a, b) {
  let smaller; let
    greater;
  if (a > b) {
    greater = a;
    smaller = b;
  } else {
    greater = b;
    smaller = a;
  }

  if (a === b) {
    return 0;
  } else {
    if (a % 5 === b % 5) {
      return smaller;
    } else {
      return greater;
    }
  }
}
