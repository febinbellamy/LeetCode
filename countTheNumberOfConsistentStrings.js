/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let numOfConsistentStrings = 0;
  let temp = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let currentWordArray = words[i].split("");

    let filteredWordArr = currentWordArray.filter((char) =>
      allowed.includes(char)
    );

    if (filteredWordArr.length === currentWordArray.length) {
      numOfConsistentStrings++;
    }

    //         for (let j = 0; j < words[i].length; j++) {
    //             let currentChar = words[i][j];

    //             if (allowed.includes(currentChar)) {
    //                 temp += currentChar;
    //             } else {
    //                 temp = "";
    //                 break;
    //             }
    // //         }
    //
    // if (words[i] === temp) {
    //     numOfConsistentStrings++;
    //     temp = ""
    // }
  }

  return numOfConsistentStrings;
};
