/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr=[]
for(let i=0;i<sentences.length;i++){
    arr.push(sentences[i].split(' ').length)
}
let max=Math.max(...arr)
return max
};