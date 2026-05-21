/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        let n=nums[i+k]?? 0
        let n2=nums[i-k]?? 0
        if(nums[i]>n && nums[i]>n2){
            sum+=nums[i]
        }
    }
    return sum
};