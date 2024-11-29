/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count=0
  let consecutiveCount =0
  for( let i=0;i<nums.length;i++){
  if(nums[i]==1){
  count++
  consecutiveCount = Math.max(count,consecutiveCount)
    }else{
     count =0
    }
  }
return consecutiveCount

};