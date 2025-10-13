function fizzBuzzArray(number) {
  const outputArray = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArray.push("FizzBuzz");
    } else if (i % 5 === 0) {
      outputArray.push("Buzz");
    } else if (i % 3 === 0) {
      outputArray.push("Fizz");
    } else {
      outputArray.push(i);
    }
  }

  return outputArray;
}

fizzBuzzArray(15);

module.exports = fizzBuzzArray;
