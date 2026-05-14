/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    const n = nums.length
    let result = Math.abs(nums[n - 1] - nums[0])

    for (let i = 0; i < n - 1; i++) {
        result = Math.max(result, Math.abs(nums[i + 1] - nums[i]))
    }

    return result
};