/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let repeatingChars = "";
  const arrOfConsecutiveChars = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (i === 0) {
      repeatingChars += currentChar;
    } else if (repeatingChars.includes(currentChar)) {
      repeatingChars += currentChar;
      if (i === s.length - 1) {
        arrOfConsecutiveChars.push(repeatingChars);
      }
    } else if (!repeatingChars.includes(currentChar)) {
      if (repeatingChars.length > 1) {
        arrOfConsecutiveChars.push(repeatingChars);
      }
      repeatingChars = currentChar;
    }
  }

  if (arrOfConsecutiveChars.length === 1) {
    return arrOfConsecutiveChars[0].length;
  }

  if (arrOfConsecutiveChars.length === 0) {
    return 1;
  }

  const lengths = arrOfConsecutiveChars.map((char) => char.length);
  return Math.max(...lengths);
};
