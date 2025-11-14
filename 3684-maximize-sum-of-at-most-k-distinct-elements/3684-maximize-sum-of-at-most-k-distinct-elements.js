/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let arr=[...new Set(nums)]
    arr.sort((a,b)=>b-a)
    return arr.slice(0,k)

};