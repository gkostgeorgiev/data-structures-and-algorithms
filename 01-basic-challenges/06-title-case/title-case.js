function titleCase(string) {
  const splitStringArray = string.split(" ");
  const stringsToLowerCase = splitStringArray.map((item) => item.toLowerCase());
  const stringsToUpperCase = stringsToLowerCase.map(
    (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
  );
  return stringsToUpperCase.join(" ");
}

// another solution would be
// function titleCase(str) {
//   return str.replace(/\b\w/g, (match) => match.toUpperCase());
// }

// The regex /\b\w/g matches the first letter of each word.

// \b matches the word boundary
// \w matches the first letter of each word
// The g flag is used to replace all occurrences of the regex in the string

titleCase("sHoRt AnD sToUt");

module.exports = titleCase;
