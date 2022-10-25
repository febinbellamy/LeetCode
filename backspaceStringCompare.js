/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let outputS = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (currentChar !== "#") {
      outputS.push(currentChar);
    } else {
      outputS.pop();
    }
  }

  let outputT = [];

  for (let j = 0; j < t.length; j++) {
    let currentChar = t[j];

    if (currentChar !== "#") {
      outputT.push(currentChar);
    } else {
      outputT.pop();
    }
  }

  return outputT.join("") === outputS.join("");
};
