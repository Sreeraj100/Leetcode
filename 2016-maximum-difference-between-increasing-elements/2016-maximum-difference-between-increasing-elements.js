/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let lar=-Infinity
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]<nums[j]){
            if(lar<nums[j]-nums[i]){
                lar=nums[j]-nums[i]
            }
        }
    }
  }  
  return lar>0?lar:-1
};