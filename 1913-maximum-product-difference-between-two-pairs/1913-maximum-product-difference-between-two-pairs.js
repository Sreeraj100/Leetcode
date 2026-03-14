/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums= nums.sort((a,b)=> a-b)
    let l = nums.length;
    return nums[l-1]*nums[l-2] - nums[0]*nums[1]
};