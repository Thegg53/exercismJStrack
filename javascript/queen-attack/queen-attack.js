export class QueenAttack {
  constructor(white, black) {
    !white ? (this.white = [0, 3]) : (this.white = white);
    !black ? (this.black = [7, 3]) : (this.black = black);
  }
}
//  (white, black) => {
//   !white ? (white = [0, 3]) : white;
//   !black ? (black = [7, 3]) : black;
// };
