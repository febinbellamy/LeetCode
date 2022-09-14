/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let num2 = target - currentNum;
        if (nums.includes(num2) && nums.indexOf(num2) !== i) {
            return [i, nums.indexOf(num2)];
        } 
    }
    return false;
};