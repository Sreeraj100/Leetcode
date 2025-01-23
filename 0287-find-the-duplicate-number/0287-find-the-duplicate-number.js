/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let output=0
    nums.sort((a,b)=>a-b)
 
        for(let j=0;j<nums.length;j++){
            if(nums[j]==nums[j+1]){
               output=nums[j]
            }
        }

    return output
};