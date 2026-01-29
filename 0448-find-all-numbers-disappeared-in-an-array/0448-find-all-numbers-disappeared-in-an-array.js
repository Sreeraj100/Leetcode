/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr=[]
    let set=new Set(nums)
   for(let i=0;i<nums.length;i++){
    if(!set.has(i+1)){
        arr.push(i+1)
    }
    }
    return arr
};