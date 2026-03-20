/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
     let count = 0
    
    for(i = 0; i < words.length; i++){
        for(j = 1; j <= s.length; j++){
            if(words[i] == s.slice(0, j)){
                count++
            }
        }        
    }
     return count
};