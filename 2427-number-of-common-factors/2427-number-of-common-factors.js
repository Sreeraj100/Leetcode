/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  let max=Math.max(a,b)
  let out=0
  for(let i=1;i<=max;i++){
    if(a%i==0 && b%i==0){
     out++
    }
  }  
  return out
};