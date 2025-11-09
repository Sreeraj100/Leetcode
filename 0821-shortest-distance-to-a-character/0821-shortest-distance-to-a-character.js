/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer = Array(s.length).fill(Infinity);
    let l = Infinity, r = Infinity;
    
    for(let f = 0; f < s.length; f++) {
        const b = s.length-1-f;
        
        l = s[f] === c ? 0 : l+1;
        r = s[b] === c ? 0 : r+1;
        
        answer[f] = Math.min(answer[f], l);
        answer[b] = Math.min(answer[b], r);
    }
    return answer;     
};