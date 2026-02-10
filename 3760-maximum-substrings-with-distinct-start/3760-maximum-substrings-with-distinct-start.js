/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let arr=[...new Set(s.split(''))]
    return arr.length
};