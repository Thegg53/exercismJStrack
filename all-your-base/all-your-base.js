function calculateValue(numb, base) {
  let a = numb.reduce((acc, curr, idx, arr) => {
    return acc + curr * base ** (arr.length - idx - 1);
  }, 0); //numb[0] * base ** (numb.length - 1));
  return a;
}

export const convert = (inputArr, inputBase, targetBase) => {
  // debugger;
  if (inputBase === 1) {
    throw new Error("Wrong input base");
  }
  if (targetBase === 1) {
    throw new Error("Wrong output base");
  }
  if (inputArr.length === 0 || (inputArr.length > 1 && inputArr[0] === 0)) {
    throw new Error("Input has wrong format");
  } else if (inputArr.length === 1 && inputArr[0] === 0) {
    return [0];
  } else {
    const nonZeroInputs = inputArr.filter(el => el > 0);
    const negativeInputs = inputArr.filter(el => el < 0);
    const inputDigitBiggerThanBase = inputArr.filter(el => el >= inputBase);
    // console.log(nonZeroInputs);
    if (nonZeroInputs.length == 0) {
      throw new Error("Input has wrong format");
    }
    if (negativeInputs.length >= 1) {
      throw new Error("Input has wrong format");
    }
    if (inputDigitBiggerThanBase.length >= 1) {
      throw new Error("Input has wrong format");
    }
  }
  let v = calculateValue(inputArr, inputBase);
  // console.log(v);
  let oA = [];
  while (v / targetBase >= 1 / targetBase) {
    oA.push(v % targetBase);
    v = (v - oA[oA.length - 1]) / targetBase;
  }
  oA = oA.reverse();
  // console.log(oA);
  return oA;
};

// convert([1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1], 4, 2);
