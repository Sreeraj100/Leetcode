/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
let words=word.split('')

let ind=words.indexOf(ch)
let a=0
for(let i=ind;i>Math.floor(ind/2);i--){
let temp=words[i]
 words[i]=words[a]
 words[a]=temp
a++
}
return words.join('')


};