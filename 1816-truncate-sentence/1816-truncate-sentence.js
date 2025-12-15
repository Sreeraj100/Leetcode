/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr=s.split(' ')
    return arr.slice(0,k).join(' ')
};