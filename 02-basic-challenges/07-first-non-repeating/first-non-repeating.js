function findFirstNonRepeatingCharacter(string) {
  const charObj = {};
  for (let i = 0; i < string.length; i++) {
    const selectedCharacter = [string[i]];
    if (!charObj[string[i]]) {
      charObj[string[i]] = 1;
    } else charObj[string[i]] = charObj[string[i]] + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (charObj[string[i]] === 1) return string[i];
  }
  return null;
}

console.log(findFirstNonRepeatingCharacter("aabccdeff")); // should return 'b'
console.log(findFirstNonRepeatingCharacter("aabbcc")); // should return null
console.log(findFirstNonRepeatingCharacter("abcdef"));

module.exports = findFirstNonRepeatingCharacter;
