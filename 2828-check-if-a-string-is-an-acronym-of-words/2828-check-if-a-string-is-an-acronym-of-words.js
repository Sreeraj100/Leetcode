/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let str=""
    for(let i of words){
        str+=i.split('').slice(0,1).join('')
    }
    return str===s
};