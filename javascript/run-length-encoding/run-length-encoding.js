function arrToString(arr) {
  let s = "";
  arr.forEach(el => {
    s = s + (el.length == 1 ? el : el.length + el.substr(0, 1));
  });
  return s;
}

function createArray(a) {
  let aO = [];
  let lastLetter = "";
  for (let i = 0; i < a.length; i++) {
    a[i] == lastLetter
      ? (aO[aO.length - 1] = aO[aO.length - 1] + a[i])
      : aO.push(a[i]);
    lastLetter = a[i];
  }
  return aO;
}

export const encode = sInput => {
  debugger;
  let aInput = sInput.split("");

  let a = createArray(aInput);

  let sOutput = arrToString(a);
  return sOutput;
};

export const decode = sInput => {
  let regEx = /\d*\w|\s*/g;
  let groups = sInput.match(regEx);
  let sOutput = "";
  console.log(groups);
  for (let i = 0; i < groups.length; i++) {
    sOutput = sOutput + groups[i];
  }
  console.log("sOutput", sOutput);
  return sOutput;
};
