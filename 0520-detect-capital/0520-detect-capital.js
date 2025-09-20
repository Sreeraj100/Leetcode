/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
let s=word.toLowerCase()
let w = word.toUpperCase()
if(w==word ||s==word){
    return true
}else if(w.slice(1)==word.slice(1)||s.slice(1)==word.slice(1)){
    return true
}else{
    return false
}   


};