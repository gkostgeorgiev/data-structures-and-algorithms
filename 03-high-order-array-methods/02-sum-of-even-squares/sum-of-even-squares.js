function sumOfEvenSquares(array) {
  const result = array.reduce((a, b) => {
    if (b % 2 !== 0) return a; 
    return a + b ** 2;
  }, 0);
  return result;
}

sumOfEvenSquares([1, 2, 3, 4, 5])
module.exports = sumOfEvenSquares;
