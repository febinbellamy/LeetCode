/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  // reverse1
  let reverse1 = String(num).split("").reverse();

  // remove any leading 0s
  for (let i = 0; i < reverse1.length; i++) {
    let currentNum = reverse1[i];
    let prevNum = reverse1[i - 1];

    if (currentNum === "0" && !prevNum) {
      reverse1.splice(i);
    }
  }

  let reverse2 = reverse1.reverse();
  return Number(reverse2.join("")) === num ? true : false;
};

