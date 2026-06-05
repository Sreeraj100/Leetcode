/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    let obj={}
    let arr=[]
    for(let i of nums){
        obj[i]?obj[i]++:obj[i]=1
        if(obj[i]<=k){arr.push(i)}
    }
    return arr
};