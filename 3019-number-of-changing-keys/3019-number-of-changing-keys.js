/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count=0
    for(let i=0;i<s.length-1;i++){
        if(s[i].toUpperCase()!==s[i+1].toUpperCase()){
         count++
        }
    }
    return count
};