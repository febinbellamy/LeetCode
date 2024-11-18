/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const asciiOfTarget = target.charCodeAt(0);
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let asciiOfCurrentLetter = currentLetter.charCodeAt(0);
    if (asciiOfCurrentLetter > asciiOfTarget) {
      return currentLetter;
    }
  }
  return letters[0];
};
