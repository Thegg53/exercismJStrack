function calculateValue(numb, base) {
  let a = numb.reduce((acc, curr, idx, arr) => {
    return acc + curr * base ** (arr.length - idx - 1);
  }, 0); //numb[0] * base ** (numb.length - 1));
  return a;
}

export const convert = (inputArr, inputBase, targetBase) => {
  // debugger;
  if (inputArr.length === 0) {
    throw new Error("Input has wrong format");
  }
  let v = calculateValue(inputArr, inputBase);
  let oA = [];
  while (v / targetBase >= 1 / targetBase) {
    oA.push(v % targetBase);
    v = (v - oA[oA.length - 1]) / targetBase;
  }
  oA = oA.reverse();
  return oA;
};

// convert([1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1], 4, 2);
