function formatPhoneNumber(array) {
  const concatenatedArray = array.join("");
  const bracketsText = "(" + `${concatenatedArray.slice(0, 3)}` + ")";
  const firstGroupText = concatenatedArray.slice(3, 6);
  const secondGroupText = concatenatedArray.slice(6);

  return `${bracketsText} ${firstGroupText}-${secondGroupText}`;
}

module.exports = formatPhoneNumber;
