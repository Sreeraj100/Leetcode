/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length
    let low = 0
    let high = n
    const res = []
    for(let i=0; i<n; i++){
        if(s[i] === 'I'){
            res.push(low)
            low++
        }else{
            res.push(high)
            high--
        }
    }
    res.push(low)
    return res
};