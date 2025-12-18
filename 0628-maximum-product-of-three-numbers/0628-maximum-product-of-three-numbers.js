/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=> b-a)
    let l = nums.length
    let val1 = nums[0] * nums[1] * nums[2]
    let val2 = nums[0] * nums[l-1] * nums[l-2]
    return Math.max(val1,val2)

};