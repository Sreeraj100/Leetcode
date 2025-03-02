/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let matches=0
  let advance=0
  let out=0
  while(n!=1){
    if(n%2==0){
        matches=n/2
        advance=matches
        n=advance
    }else{
       matches=(n-1)/2
       advance=n-matches
       n=advance
    }
    out+=matches
  } 

return out
};