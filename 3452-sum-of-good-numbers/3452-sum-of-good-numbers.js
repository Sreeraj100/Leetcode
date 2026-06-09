/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum=0
    for (i=0; i<nums.length; i++) {
        if ((typeof nums[i+k]==='undefined'||nums[i+k]<nums[i])&&(typeof nums[i-k]==='undefined'||nums[i-k]<nums[i]) ) {            
         sum = sum + nums[i];            
        }   
    }
    return sum
};