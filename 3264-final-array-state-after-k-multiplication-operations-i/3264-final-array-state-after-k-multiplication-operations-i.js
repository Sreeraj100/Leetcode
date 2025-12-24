/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  for(let i=1;i<=k;i++){
    let min=Math.min(...nums)
    let ind=nums.indexOf(min)
    nums[ind] = min * multiplier
  }
 return nums
};