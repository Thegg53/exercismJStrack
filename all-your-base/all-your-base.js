function calculateValue(numb, base) {
  let a = numb.reduce((acc, curr, idx, arr) => {
    return acc + curr * base ** (arr.length - idx - 1);
  }, 0); //numb[0] * base ** (numb.length - 1));
  return a;
}

export const convert = (inputArr, inputBase, targetBase) => {
  debugger;
  let v = calculateValue(inputArr, inputBase);
  console.log(v);
  let oA = [];
  while (v / targetBase >= 1 / targetBase) {
    oA.push(v % targetBase);
    v = (v - oA[oA.length - 1]) / targetBase;
  }
  oA = oA.reverse();
  console.log(oA);
  return oA;
};

// convert([1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1], 4, 2);
