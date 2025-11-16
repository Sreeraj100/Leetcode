/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    let dup=new Set()
    let count=0
    if(s.length != goal.length){
        return false
    }else{
    if (s === goal) {
        let set = new Set(s)
        return set.size < s.length
    }

    let diff = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i)
        if (diff.length > 2) return false
    }

    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]]
    }
    
    
};