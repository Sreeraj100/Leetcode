/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let neg=0
    let pos=0
    for(let i of nums){
        if(i>0){
            pos++
        }else if(i<0){
            neg++
        }
    }
    return Math.max(pos,neg)
};