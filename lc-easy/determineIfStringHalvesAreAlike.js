/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let firstHalfOfString = s.slice(0, s.length / 2);
  let secondHalfOfString = s.slice(s.length / 2);
  let vowels = "aeiou";
  let firstVowels = "";
  let secondVowels = "";

  for (let i = 0; i < firstHalfOfString.length; i++) {
    let currentCharOfFirst = firstHalfOfString[i];
    let currentCharOfSecond = secondHalfOfString[i];

    if (vowels.includes(currentCharOfFirst.toLowerCase())) {
      firstVowels += currentCharOfFirst;
    }
    if (vowels.includes(currentCharOfSecond.toLowerCase())) {
      secondVowels += currentCharOfSecond;
    }
  }

  return firstVowels.length === secondVowels.length ? true : false;
};
