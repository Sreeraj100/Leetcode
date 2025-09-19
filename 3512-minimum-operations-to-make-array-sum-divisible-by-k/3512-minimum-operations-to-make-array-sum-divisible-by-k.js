/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((a,c)=>a+c,0)
    if(sum%k==0){
        return 0
    }else{
        return sum%k
    }
   
};