export const encode = sInput => {
  let aInput = sInput.split("");
  //   let iCountLetter = 1;
  let sOutput = "";
  debugger;
  let previousLetter = "";
  for (let i = 0; i < aInput.length; i++) {
    if (i == 0) {
      sOutput = aInput[i];
    } else {
      if (aInput[i] != previousLetter) {
        //new letter
        sOutput = sOutput + aInput[i];
      } else {
        //already existing
        if (isNaN(sOutput.substr(sOutput.length - 2, 1))) {
          //check if it has a number before the letter
          sOutput = sOutput.substr(0, sOutput.length - 1) + "2" + aInput[i];
        } else {
          let n = sOutput.substr(sOutput.length - 2, 1);
          n = parseInt(n) + 1;
          sOutput = sOutput.substr(0, sOutput.length - 2) + n + aInput[i];
        }
      }
    }
    previousLetter = aInput[i];
  }
  return sOutput;
};

export const decode = sInput => {};
