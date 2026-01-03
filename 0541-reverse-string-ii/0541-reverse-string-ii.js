/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
 if (k > s.length) return s.split('').reverse().join('')
    
    const split = s.split('')
    
    for (let i = 0; i < s.length; i += 2*k) {
        const reverse = split.splice(i, k).reverse()
        split.splice(i, 0, ...reverse)
    }
    
    return split.join('')
}