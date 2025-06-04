/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
let word=''    
for(let i=0;i<words.length;i++){
    if(words[i]==words[i].split('').reverse().join('')){
       word=words[i]
       break
    }
}

if(word){
    return word
}else{
    return ""
}

};