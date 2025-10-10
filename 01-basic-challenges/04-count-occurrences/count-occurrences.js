// function countOccurrences(string, substring) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === substring) {
//       counter++;
//     }
//   }
//   return counter;
// }

function countOccurrences(string, substring) {
  return string.split(substring).length - 1;
}

module.exports = countOccurrences;
