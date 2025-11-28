/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let  sum=0
    for(let i in nums){
        if(i%2==0){
            sum+=nums[i]
        }else{
            sum-=nums[i]
        }
    }
    return sum
};