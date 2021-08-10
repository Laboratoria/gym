function noSpace(x) {
  let string = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] != " ") {
      string += x[i];
    }
  }

  return string;
}
