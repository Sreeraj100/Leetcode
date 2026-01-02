/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
 
 let a= arr.map((n,i)=>fn(n,i))
 return a
};