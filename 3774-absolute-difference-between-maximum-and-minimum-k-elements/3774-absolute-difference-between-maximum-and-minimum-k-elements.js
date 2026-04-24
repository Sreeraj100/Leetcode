/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
   nums.sort((a,b)=>a-b)
   let l=nums.slice(nums.length-k).reduce((a,c)=>a+c,0)
   let s=nums.slice(0,k).reduce((a,c)=>a+c,0)
   return l-s
  
};