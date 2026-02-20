/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let str=""
  for(let i=0;i<s.length;i++){
    if(s[i]>0 && s[i+2]==="#"){
     str+=String.fromCharCode(Number(s[i]+s[i+1])+96)
     i+=2
    }else if(s[i]>=0 && s[i+2] !=="#"){
        str+=String.fromCharCode(Number(s[i])+96)
    }
  } 
  return str
  
};