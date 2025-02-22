/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
      let a = 1;
      nums.sort((a,b)=>a-b);
      for(let i=0;i<nums.length;i++){
        if(nums[i] === a){
            a++
        }
      }return a
};