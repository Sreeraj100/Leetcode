/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  let binaryN = n.toString(2).split("").reverse()
  let odd =0
  let even =0
  for (let i=0;i<binaryN.length;i++){
    if (binaryN[i]==1){
      if (i%2==0){
        even++
      }else{
        odd++
      } 
    }
  }
  return [even,odd]
};