function findMissingLetter(array) {
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const startingLetter = array[0].toLowerCase();
  const endingLetter = array[array.length - 1].toLowerCase();
  const startIndex = alphabetArray.indexOf(startingLetter);
  const endinIndex = alphabetArray.indexOf(endingLetter);
  const slicedArray = alphabetArray.slice(startIndex, endinIndex + 1);
  const argumentSet = new Set(array.map((letter) => letter.toLowerCase()));
  for (let i = 0; i < slicedArray.length; i++) {
    const selectedLetter = slicedArray[i];
    if (!argumentSet.has(selectedLetter)) {
      const isUpperCase = array[0] === array[0].toUpperCase();
      const result = isUpperCase
        ? selectedLetter.toUpperCase()
        : selectedLetter;
      return result;
    }
  }
  return "";
}

findMissingLetter(["X", "Z"]);
module.exports = findMissingLetter;
