/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    let len=s.length-1
    for(let i=0;i<s.length;i++){
        console.log(s[i],s[len-i])
        if(s[i]===s[len-i]){
            return i
        }
    }
    return -1
};