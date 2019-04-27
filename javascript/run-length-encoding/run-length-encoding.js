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
  let groups = sInput.match(regEx); //split when a new letter or whitespace is found

  let sOutput = "";
  for (let i = 0; i < groups.length; i++) {
    let s = "";
    let j = 0;
    if (groups[i].length > 1) {
      //if the group has length more than one, there is/are numbers and then the character

      let n = parseInt(groups[i].substring(0, groups[i].length - 1));
      while (j < n) {
        s = s + groups[i].substring(groups[i].length - 1);
        j++;
      }
    } else {
      //if the length of the group is one, then the group is just the character we want
      s = groups[i];
    }
    sOutput = sOutput + s;
  }
  console.log("sOutput", sOutput);
  return sOutput;
};
