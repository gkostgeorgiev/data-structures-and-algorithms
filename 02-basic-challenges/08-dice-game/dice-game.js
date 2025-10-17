function diceGameSimulation(numSimulations) {
  let dice1;
  let dice2;
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  const finalArray = [];

  const returnOutcome = () => {
    let iteration = 1;

    while (iteration <= numSimulations) {
      dice1 = rollDice();
      dice2 = rollDice();
      const diceSum = dice1 + dice2;
      const returnOutcomeText = () => {
        switch (diceSum) {
          case 7:
          case 11:
            return "win";
          case 2:
          case 3:
          case 12:
            return "lose";
          default:
            return "roll again";
        }
      };
      finalArray.push({
        dice1,
        dice2,
        sum: diceSum,
        result: returnOutcomeText(),
      });
      iteration++;
    }
  };

  returnOutcome(numSimulations);
  return finalArray;
}
console.log(diceGameSimulation(1));
module.exports = diceGameSimulation;
