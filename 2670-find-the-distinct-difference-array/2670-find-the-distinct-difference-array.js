/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let res=[]
    for(let i=0;i<nums.length;i++){
     let prefix=[...new Set(nums.slice(0,i+1))]
     let suffix=[...new Set(nums.slice(i+1))]
     res.push(prefix.length-suffix.length)
    }
    return res
};