/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let arr=[]
    for(let i of words){
        arr.push(...i.split(separator))
    }
    return arr.filter((n)=>n!=="")
};