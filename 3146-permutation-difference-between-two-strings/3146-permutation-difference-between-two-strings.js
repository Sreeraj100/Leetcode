/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
   let diff=[]
    for(let i=0;i<s.length;i++){
     diff.push(Math.abs(i - t.indexOf(s[i])))
    }
    return diff.reduce((a,c)=>a+c,0)
};