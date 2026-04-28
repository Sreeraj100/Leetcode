/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0
    for(let i of strs){
        max = Math.max(!isNaN(Number(i)) ? Number(i):i.length,max);
    }
    return max
};