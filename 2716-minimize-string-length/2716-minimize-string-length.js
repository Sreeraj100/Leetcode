/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {    
let arr=s.split('')
let out=[...new Set(arr)]
return out.length

};