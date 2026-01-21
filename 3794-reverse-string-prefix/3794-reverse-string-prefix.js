/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
  let str=s.split('').slice(0,k).reverse().join("")
  let out=s.split('').slice(k).join("") 
  return str+out

};