function removeDuplicates(array) {
  const set = new Set();
  for (let item of array) {
    if (!set.has(item)) set.add(item);
  }
  const finalArray = [];
  for (let item of set) finalArray.push(item);
    return finalArray;
  // or   return Array.from(set);
}

removeDuplicates([1, 2, 3, 4, 5, true, 1, "hello", 2, 3, "hello", true]);

module.exports = removeDuplicates;
