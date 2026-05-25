/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for (let i=0;i<s.length-1;i++){
        let diff= Math.abs(Number(s[i+1])-Number(s[i]))
        if(diff > 2){
            return false
        }
    }
    return true
};