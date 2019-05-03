export { value, COLORS };

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

const value = aColors => {
  //   return sColors;
  let sOutput = ``;
  aColors.forEach(el => (sOutput = sOutput + COLORS.indexOf(el)));
  let nOutput = parseInt(sOutput);
  return nOutput;
};
