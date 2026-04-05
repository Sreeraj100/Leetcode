/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const set = new Set()
    for(let x of nums){
        if(x !== 0){
        set.add(x)
        }
    }        
    return set.size
};