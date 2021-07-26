export const printStar = (numero) => {
  let string = "";

  for (let i = 0; i < numero; i++) {
    string += "*";
  }

  return string;
};

export const printArrayStar = (numero) => {
  const array = [];

  for (let i = 0; i < numero; i++) {
    let elementArray = "";

    for (let stars = i; stars >= 0; stars--) {
      elementArray += "*";
    }

    array.push(elementArray);
  }

  return array;
};
