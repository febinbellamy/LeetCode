/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let mergedArray = [...nums2, " ", ...nums3];

  let commonIntegers = [];

  for (let i = 0; i < mergedArray.length; i++) {
    let currentNum = mergedArray[i];

    if (i < mergedArray.indexOf(" ")) {
      if (nums1.includes(currentNum) || nums3.includes(currentNum)) {
        if (commonIntegers.indexOf(currentNum) < 0) {
          commonIntegers.push(currentNum);
        }
      }
    } else {
      if (nums1.includes(currentNum) || nums2.includes(currentNum)) {
        if (commonIntegers.indexOf(currentNum) < 0) {
          commonIntegers.push(currentNum);
        }
      }
    }
  }

  return commonIntegers;
};
