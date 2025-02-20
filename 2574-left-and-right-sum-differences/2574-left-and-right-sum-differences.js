/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
   let n = nums.length;
    let leftSum = 0;
    let rightSum = nums.reduce((sum, num) => sum + num, 0); // Total sum of array
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        rightSum -= nums[i]; // Remove current element from rightSum
        result[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i]; // Add current element to leftSum
    }
    
    return result;
};