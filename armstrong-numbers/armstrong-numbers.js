export const validate = n => {
  if (Number.isNaN(n)) {
    return null;
  }
  if (!Number.isInteger(n)) {
    return false;
  }
  if (!Number.isSafeInteger(n)) {
    return null;
  }
  if (n < 1) {
    return false;
  }
  let s = n.toString();
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    total = total + Math.pow(Number(s[i]), s.length);
  }
  if (total === n) {
    return true;
  } else {
    return false;
  }
};
