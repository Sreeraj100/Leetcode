/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count=0
        let sum=0
        for(let i of nums){
            sum+=i
            if (sum===0){
                count++
            }
        }
        return count
};