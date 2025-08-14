/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
 let mid=s.length/2
 let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] 
 let L=0
 let R=0
 for(let i=0;i<mid;i++){
    if(vowels.includes(s[i])){
        L++
    }
 }
 for(let i=mid;i<s.length;i++){
    if(vowels.includes(s[i])){
        R++
    }
 }

 return L==R
};