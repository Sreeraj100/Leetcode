/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let check
    let count=0
    for(let word of words){
        check=true
        for(let ltr of word){
            if(!allowed.includes(ltr)){
               check=false 
            }
        }
        if(check){
            count++
        }
    }
return count
 
};