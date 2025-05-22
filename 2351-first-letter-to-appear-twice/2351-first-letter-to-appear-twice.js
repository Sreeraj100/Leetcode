/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
let obj={}
let letter=''
for(let val of s){
    if(obj[val]){
       obj[val]++ 
    }else{
        obj[val]=1
    }
}

for(let i=0;i<s.length-1;i++){
    if(s[i]===s[i+1]){
      letter = s[i]
      break
    }
}
console.log(letter)

if(letter===''){
  for(let val in obj){
    if(obj[val]>1){
        return val
    }
  }
}else{
    return letter
}


};