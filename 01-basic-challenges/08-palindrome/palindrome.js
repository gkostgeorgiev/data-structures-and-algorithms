function isPalindrome(string) {
  const regex = /[a-zA-Z0-9]/g;
  const siftedString = string.match(regex).join("").toLowerCase();
  const reversedSiftedString = siftedString.split("").reverse().join("");
  return siftedString === reversedSiftedString;
}

isPalindrome("A man, a plan, a canal, Panama");

module.exports = isPalindrome;
