/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   let v=['a','e','i','o','u','A','E','I','O','U']
   let str=s.split('').reverse()
   let arr=[]
   let ind=0
   let output=[]
   for(let i=0;i<str.length;i++){
    if(v.includes(str[i])){
        arr.push(str[i])
    }
   }
   for(let i=0;i<s.length;i++){
     if(v.includes(s[i])){
        output.push(arr[ind])
        ind++
     }else{
        output.push(s[i])
     }
   } 
   return output.join('')
};