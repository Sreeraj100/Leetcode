/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let n = nums.length
    var ans = 0
    for(let i = 0; i < n; ++i){
        const s = new Set()
        for(let j = i; j < n; ++j){
            s.add(nums[j]);
            ans += Math.pow(s.size, 2)
        }
    }
    return ans
};