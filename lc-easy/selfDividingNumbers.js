/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let selfDividingNums = [];
  for (let i = left; i <= right; i++) {
    // if the num is less than 10, push it in the array
    if (i < 10) {
      selfDividingNums.push(i);

      // if the num is 10 or higher...
    } else {
      // turn it into a string
      let str = String(i);
      // console.log(str);
      let counter = 0;
      // traverse the string num to check each digit
      for (let j = 0; j < str.length; j++) {
        let currentDigit = Number(str[j]);
        // console.log("currentDigit!: ", currentDigit)

        if (i % currentDigit === 0) {
          counter++;
          console.log("counter is currently:", counter);
          console.log("The length of the string is:", str.length);
          if (counter === str.length) {
            selfDividingNums.push(i);
            counter = 0;
          }
        }
      }
    }
  }
  console.log(selfDividingNums);
  return selfDividingNums;
};
