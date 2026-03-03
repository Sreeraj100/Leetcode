/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let res=0
    for(let i of nums){
        if(i%2==0){
            res|=i
        }
    }
    return res
};