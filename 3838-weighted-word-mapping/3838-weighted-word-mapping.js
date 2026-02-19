/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let str=""
    for(let wrd of words){
        let sum =0
        for(let i=0;i<wrd.length;i++){ 
            sum += weights[wrd.charCodeAt(i)-97]
            // console.log(weights[wrd.charCodeAt(i)-97])
        }
        // console.log("-----")
        str+=String.fromCharCode(Math.abs((sum%26)-122))
    }
    return str
};