/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count=0
    let v=['a','e','i','o','u']
   for(let i=left;i<=right;i++){
    if(v.includes(words[i][0]) && v.includes(words[i][words[i].length-1])){
        count++
        console.log(words[i])
    }
   }  
   return count
};