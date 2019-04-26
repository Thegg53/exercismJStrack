export class QueenAttack {
  //   _white = [0, 3];
  //   _black = [7, 3];
  constructor(pos) {
    // console.log("this", this);
    // this.white = [0, 3];
    // this.black = [7, 3];
    // {
    //   (white = [0, 3]), (black = [7, 3]);
    // }
    if (!pos) {
      this.white = [0, 3];
      this.black = [7, 3];
    } else {
      !pos.white ? (this.white = [0, 3]) : (this.white = pos.white);
      !pos.black ? (this.black = [7, 3]) : (this.black = pos.black);
    }
  }
}
//  (white, black) => {
//   !white ? (white = [0, 3]) : white;
//   !black ? (black = [7, 3]) : black;
// };
