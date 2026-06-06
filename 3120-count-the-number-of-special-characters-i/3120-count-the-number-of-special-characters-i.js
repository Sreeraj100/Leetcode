/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let set = new Set(word)
    let count = 0
    for(let i = 0; i < 26; i++){
        let char = String.fromCharCode(i + 97)
        if(set.has(char) && set.has(char.toUpperCase())){
            count++
        }
    }
    return count
};