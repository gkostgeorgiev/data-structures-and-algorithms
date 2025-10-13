function arrayIntersection(array1, array2) {
  const outputArray = [];

  for (let item of array1) {
    if (array2.includes(item)) {
      outputArray.push(item);
    }
  }
  return outputArray;
}

module.exports = arrayIntersection;
