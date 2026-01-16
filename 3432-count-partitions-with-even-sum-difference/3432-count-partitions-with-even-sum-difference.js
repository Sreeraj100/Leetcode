/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum=nums.reduce((a,c)=>a+c,0)
    return sum%2==0 ?nums.length-1 :0 
};