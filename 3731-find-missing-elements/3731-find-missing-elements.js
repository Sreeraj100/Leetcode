/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let arr=[]
    let s=Math.min(...nums)
    let l=Math.max(...nums)
    let set= new Set(nums)
    for(let i=s+1;i<l;i++){
        if(!set.has(i)){
            arr.push(i)
        }
    }
    return arr
};