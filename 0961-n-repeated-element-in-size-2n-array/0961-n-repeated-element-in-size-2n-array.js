/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n=nums.length/2
    let obj={}
    for(let i of nums){
        obj[i]?obj[i]++:obj[i]=1
        if(obj[i]===n){
            return i
        }
    }
};