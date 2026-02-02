/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
   let n = temperatures.length;
    let ans = new Array(n).fill(0)
    let stack = []

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
            let [index, _] = stack.pop()
            ans[index] = i - index
        }
        stack.push([i, temperatures[i]])
    }

    return ans
};