function convertHashToArray(hash) {
  const hashArray = [];

  for (const key in hash) {
    hashArray.push([key, hash[key]]);
  }

  const sortedArray = hashArray.sort();

  return sortedArray;
}
