/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
if (new Set(word).size==word.length){
    return true
}
let obj={}
for(let i of word){
    obj[i]? obj[i]++: obj[i]=1
}
for(let char of word){
obj[char]--
if(obj[char]===0){
    delete obj[char]
}
let size = new Set(Object.values(obj)).size
if(size==1){
    return true
}else{
    obj[char]? obj[char]++: obj[char]=1
}
}
return false


};