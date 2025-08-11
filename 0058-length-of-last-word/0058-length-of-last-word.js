/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let out=s.trim().split(' ')
    return out.pop().length
};