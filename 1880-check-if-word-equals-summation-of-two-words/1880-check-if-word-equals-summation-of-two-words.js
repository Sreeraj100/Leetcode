/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    
   const firstValue = toInteger(firstWord)
    const secondValue = toInteger(secondWord)
    const targetValue = toInteger(targetWord)
    return firstValue + secondValue === targetValue
};

function toInteger(word) {
    let value = 0
    for (let i = 0; i < word.length; i++) {
        value = value * 10 + (word.charCodeAt(i) - 97)
    }
    return value
}