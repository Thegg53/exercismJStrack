function displayBoard(yw, xw, yb, xb) {
  let emptyBoard = [
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _\n"
  ];
  let board = emptyBoard;

  board[yw] =
    board[yw].substr(0, xw * 2) + "W" + board[yw].substring(xw * 2 + 1);

  board[yb] = board[yb].substr(0, xb * 2) + "B" + board[yb].substr(xb * 2 + 1);

  return board.join("\n");
}
function calcKill(yw, xw, yb, xb) {
  if (xw == xb && yw == yb) {
    throw new Error("Queens cannot share the same space");
  }
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
    // displayBoard(pos.white[0], pos.white[1], pos.black[0], pos.black[1]);
    calcKill(pos.white[0], pos.white[1], pos.black[0], pos.black[1]);
  }
  toString() {
    return displayBoard(
      this.white[0],
      this.white[1],
      this.black[0],
      this.black[1]
    );
  }
}
//  (white, black) => {
//   !white ? (white = [0, 3]) : white;
//   !black ? (black = [7, 3]) : black;
// };
