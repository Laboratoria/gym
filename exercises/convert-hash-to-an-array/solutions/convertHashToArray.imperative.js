/* eslint-disable no-restricted-syntax */
function convertHashToArray(hash) {
  const hashArray = [];

  // eslint-disable-next-line guard-for-in
  for (const key in hash) {
    hashArray.push([key, hash[key]]);
  }

  const sortedArray = hashArray.sort();

  return sortedArray;
}
