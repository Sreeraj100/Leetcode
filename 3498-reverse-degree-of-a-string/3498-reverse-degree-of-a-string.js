/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {

   let sum=0
   for(let i=0;i<s.length;i++){
    sum += Math.abs(s.charCodeAt(i)-123) * (i+1)
   } 
   return sum
};