function recycle(array) {
  const materials = ['paper', 'glass', 'organic', 'plastic'];
  return materials.map((m) => array.filter((o) => o.material === m || o.secondMaterial === m)
    .map((object) => object.type));
}
