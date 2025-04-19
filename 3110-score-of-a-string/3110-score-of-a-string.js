/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    
let arr=[]

for(let i=0;i<s.length-1;i++){
  arr.push(Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))) 
 
}
return arr.reduce((a,c)=>a+c,0)

};