/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len=Math.max(word1.length,word2.length)
    let out=[]
    for(let i=0;i<len;i++){
     out.push(word1[i])
     out.push(word2[i])
    }
    return out.join("")
};