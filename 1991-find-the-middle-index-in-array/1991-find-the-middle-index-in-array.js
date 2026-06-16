/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let n = nums.length
    let sum = 0, leftSum = 0, rightSum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i]
    }

    for (let i = 0; i < n; i++) {
        leftSum += nums[i];
        rightSum = sum - leftSum + nums[i]

        if (leftSum === rightSum){
        return i
        } 
    }

    return -1
};