/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let res=0
  for(let i=0;i<nums.length;i++){
   if(nums[i]>=nums[i+1]){
    let num=nums[i]-nums[i+1]+1
    nums[i+1]=nums[i+1]+num
    res+=num
   }
  } 
  return res 
};