/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let out=[]
    for(let i=0;i<nums.length;i++){
    out.splice(index[i],0,nums[i])
    }
return out

};