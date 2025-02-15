/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let arr=stones.split("")
  let arr2=jewels.split("")
  let count=0
  for (let i=0;i<arr.length;i++){
    for(let j=0;j<arr2.length;j++){
     if(arr[i]==arr2[j]){
         arr.splice(i,1)
         i--
         count++
     }
    }
}
return count
};