export const solve = (x, y) => {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return null;
  } else {
    const fDistance = Math.sqrt(x * x + y * y);
    if (fDistance > 10) {
      return 0;
    } else if (fDistance > 5) {
      return 1;
    } else if (fDistance > 1) {
      return 5;
    } else {
      return 10;
    }
  }
};
