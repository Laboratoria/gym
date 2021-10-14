function recycle(array) {
  const recycleArray = [[], [], [], []];

  array.forEach((object) => {
    if (object.material === 'paper' || object.secondMaterial === 'paper') {
      recycleArray[0].push(object.type);
    }
    if (object.material === 'glass' || object.secondMaterial === 'glass') {
      recycleArray[1].push(object.type);
    }
    if (object.material === 'organic' || object.secondMaterial === 'organic') {
      recycleArray[2].push(object.type);
    }
    if (object.material === 'plastic' || object.secondMaterial === 'plastic') {
      recycleArray[3].push(object.type);
    }
  });
  return recycleArray;
}
