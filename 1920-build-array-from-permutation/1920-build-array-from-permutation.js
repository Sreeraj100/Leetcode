/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
 let out=[]   
 for(let val of nums){
    out.push(nums[val])
}
return out
};