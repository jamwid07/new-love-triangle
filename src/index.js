/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    let first = preferences[i];
    let second = preferences[first - 1];
    let third = preferences[second - 1];

    if (i === (third - 1)) {
      counter++;
    }
  }
  return Math.floor(counter/3);
};
