/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let count = 0
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (i==0 && count== 0) continue
            arr.push(count)
            count = 0
        } else {
            count++
        }
    }
    arr.sort((a, b) => a - b)
    console.log(arr)
    return arr[0] >= k
};