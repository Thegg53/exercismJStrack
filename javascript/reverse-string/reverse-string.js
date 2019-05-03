export { reverseString };

const reverseString = sInput => {
  let aInput = sInput.split("");
  let sOutput = "";
  for (let i = aInput.length - 1; i >= 0; i--) {
    sOutput = sOutput + aInput[i];
  }
  return sOutput;
};
