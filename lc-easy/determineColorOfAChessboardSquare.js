/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  // coordinates --> letter first, number second
  // if the square is white, return true.
  // if its black return false.

  const numArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const chessBoard = {};
  let color = "white";

  for (let i = 0; i < numArr.length; i++) {
    let number = numArr[i];

    color = color === "white" ? "black" : "white";

    for (let j = 0; j < letterArr.length; j++) {
      let letter = letterArr[j];
      let numNLetter = letter + number;

      chessBoard[numNLetter] = color;
      color = color === "black" ? "white" : "black";
    }
  }

  return chessBoard[coordinates] === "white" ? true : false;
};
