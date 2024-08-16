/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let temp = "";
  let uniqueWords = [];
  let alphabetIndx = 0;

  let arrOfWords = s.split(" ");
  // "dog cat cat dog" ===> [ 'dog', 'cat', 'cat', 'dog' ]
  // 0      1       2     3

  // every element will get a new character assigned to it
  // add the char to a temp string.

  for (let i = 0; i < arrOfWords.length; i++) {
    let currentWord = arrOfWords[i];

    if (i === 0 || !uniqueWords.includes(currentWord)) {
      // if its a unique word (which is always true if i === 0)..
      temp += alphabet[alphabetIndx]; // add a unique letter to the temp str
      uniqueWords.push(currentWord); // push the current word to an array of unique words
      alphabetIndx++;
    } else if (uniqueWords.includes(currentWord)) {
      // if its a duplicate word
      let indexOfWord = uniqueWords.indexOf(currentWord);
      temp += alphabet[indexOfWord];
    }
  }
  console.log("temp", temp);
  console.log("uniqueWords", uniqueWords);

  if (temp === pattern) {
    return true;
  } else {
    return false;
  }
};
