function printArrayStar(num) {
  const array = [];

  for (let i = 0; i < num; i++) {
    let elementArray = "";

    for (let stars = i; stars >= 0; stars--) {
      elementArray += "*";
    }

    array.push(elementArray);
  }

  return array;
}
