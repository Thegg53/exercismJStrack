function calcKill(xw, yw, xb, yb) {
  if (xw == xb && yw == yb)
    throw new Error("Queens cannot share the same space");
}

export class QueenAttack {
  constructor(pos) {
    if (!pos) {
      this.white = [0, 3];
      this.black = [7, 3];
      return;
    } else {
      pos.white ? (this.white = pos.white) : (this.white = [0, 3]);
      pos.black ? (this.black = pos.black) : (this.black = [7, 3]);
    }
    calcKill(pos.white[0], pos.white[1], pos.black[0], pos.black[1]);
  }
}
//  (white, black) => {
//   !white ? (white = [0, 3]) : white;
//   !black ? (black = [7, 3]) : black;
// };
