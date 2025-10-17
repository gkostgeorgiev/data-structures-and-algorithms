function areAllCharactersUnique(string) {
  if (string === "") return true;

  const set = new Set();

  for (let i = 0; i < string.length; i++) {
    if (!set.has(string[i])) {
      set.add(string[i]);
    } else return false;
  }
  return true;
}

module.exports = areAllCharactersUnique;
