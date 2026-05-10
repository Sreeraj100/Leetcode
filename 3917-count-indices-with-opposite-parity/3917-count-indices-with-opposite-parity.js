/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
   let odd = 0, even = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2 == 0) {
            even++
            nums[i] = odd
        }
        else {
            odd++
            nums[i] = even
        }
    }
    return nums
}