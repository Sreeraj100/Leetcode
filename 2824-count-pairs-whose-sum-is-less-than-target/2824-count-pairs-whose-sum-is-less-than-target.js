/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count=0
    for(let j=0;j<nums.length;j++){
    for(let i=1;i<nums.length;i++){
        if(j<i){
        if(nums[j]+nums[i]<target){
          count++
        }
        }
    }
 }
   return count 
};