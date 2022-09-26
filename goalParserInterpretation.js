/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let interpretation = "";
  let temp = "";

  for (let i = 0; i < command.length; i++) {
    let currentChar = command[i];

    if (currentChar === "G") {
      interpretation += "G";
    } else if (
      currentChar === "(" ||
      currentChar === ")" ||
      currentChar === "a" ||
      currentChar === "l"
    ) {
      temp += currentChar;
    }
    if (temp === "()") {
      interpretation += "o";
      temp = "";
    } else if (temp === "(al)") {
      interpretation += "al";
      temp = "";
    }
  }
  return interpretation;
};
