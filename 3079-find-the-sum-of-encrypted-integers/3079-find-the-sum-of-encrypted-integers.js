/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {

    for(let i=0;i<nums.length;i++){
        let num=nums[i].toString().split('')
        let max=Math.max(...num)
        num.fill(max)
        nums[i]=num.join('')
    }
    return nums.reduce((a,c)=>a+Number(c),0)
};