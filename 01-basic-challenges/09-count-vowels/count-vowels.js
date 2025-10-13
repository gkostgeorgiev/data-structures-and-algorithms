function countVowels(string) {
  let counter = 0;
  const formattedString = string.toLowerCase();
  const vowelArray = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < formattedString.length; i++) {
    if (vowelArray.includes(formattedString[i])) counter++;
  }

  return counter;
}

module.exports = countVowels;
