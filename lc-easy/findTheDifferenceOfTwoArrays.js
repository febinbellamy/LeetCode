/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const missingNum2Vals = nums1.filter((num) => nums2.indexOf(num) === -1);

  const missingNum1Vals = nums2.filter((num) => nums1.indexOf(num) === -1);

  const newArr2 = missingNum2Vals.filter(
    (item, index) => missingNum2Vals.indexOf(item) === index
  );

  const newArr1 = missingNum1Vals.filter(
    (item, index) => missingNum1Vals.indexOf(item) === index
  );

  return [newArr2, newArr1];
};
