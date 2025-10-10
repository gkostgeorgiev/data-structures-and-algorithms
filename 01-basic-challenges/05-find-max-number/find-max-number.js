function findMaxNumber(array) {
  let maxNumber = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) maxNumber = array[i];
  }
  return maxNumber;
}

// Another solution would be

// function findMaxNumber(array) {
//     return Math.max(...array);
// }

module.exports = findMaxNumber;
