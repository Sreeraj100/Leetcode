/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
       const stk = []
    let res = 0
    for (const n of nums) {
        while (stk.length && stk.at(-1) > n)
            stk.pop()
        if (n === 0)
            continue
        if (!stk.length || stk.at(-1) < n) {
            res++
            stk.push(n)
        }
    }
    return res
};