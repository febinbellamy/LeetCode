/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  if (!(0 <= s.length || s.length < 1000)) return false;
  if (t.length !== s.length + 1) return false;

  for (let i = 0; i < t.length; i++) {
    let currentCharacterT = t[i];
    let currentCharacterS = s[i];

    if (currentCharacterT !== currentCharacterS) {
      return currentCharacterT;
    }
  }
  return false;
};
