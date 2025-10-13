function findMissingNumber(array) {
  const highestNumber = Math.max(...array);
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 1; i <= highestNumber; i++) {
    if (!sortedArray.includes(i)) return i;
  }
}

// While the above function works the one below has better time O(n) and space complexity O(1):
// function findMissingNumber(arr) {
//   if (!arr || arr.length === 0) {
//     return undefined;
//   }

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;

//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }

module.exports = findMissingNumber;
