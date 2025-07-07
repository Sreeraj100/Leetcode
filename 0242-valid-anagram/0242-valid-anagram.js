/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
let w1=s.split('').sort().join('')
let w2=t.split('').sort().join('')
return w1===w2

};