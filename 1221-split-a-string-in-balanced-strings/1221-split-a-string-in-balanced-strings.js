/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count=0
  let L=0
  let R=0
  for(let i=0;i<s.length;i++){
  if(s[i]=='L'){
    L++
  }else{
    R++
  }
  if(L==R){
    count++
    R=0
    L=0
  }

  }
return count  


};