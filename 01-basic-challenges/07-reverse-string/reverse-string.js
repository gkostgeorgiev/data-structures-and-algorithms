function reverseString(string) {
  return string.split("").reverse().join("");
}

// another solution would be

// const reverseString = (string) => {
//   let newString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }
//   return newString;
// };

reverseString("Hello");

module.exports = reverseString;
