/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let ans = capacity.indexOf(Math.min(...capacity.filter(x => x >= itemSize)))
    return ans != undefined ? ans : -1
};