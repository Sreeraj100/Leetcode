/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    let count={}
    for(let i of s){
        count[i]?count[i]++:count[i]=1
    }
    for(let i of t){
        if(!count[i]) return false
        count[i]--
    }

    return true
};