/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        if (nums.lastIndexOf(currentNum) !== i) {
            return true;
        } 
    }
    return false;
};