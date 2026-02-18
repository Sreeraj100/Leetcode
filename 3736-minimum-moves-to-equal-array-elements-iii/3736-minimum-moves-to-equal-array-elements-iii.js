/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let maxNum = nums[0], totalSum = nums[0]

    for (let index = 1; index < nums.length; ++index) {
        if (nums[index] > maxNum) maxNum = nums[index]
        totalSum += nums[index]
    }

    return maxNum * nums.length - totalSum
};