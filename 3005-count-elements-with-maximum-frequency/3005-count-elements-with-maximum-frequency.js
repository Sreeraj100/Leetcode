/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map()
    for(let i of nums){
        map.set(i,(map.get(i)||0)+1)
    }
    let max=Math.max(...map.values())
    let arr=nums.filter((n)=>map.get(n)===max)
    return arr.length
};