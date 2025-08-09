/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let lar=-Infinity 
  let ind=0 
for(let i=0;i<mat.length;i++){
    let sum=mat[i].reduce((a,c)=>a+c,0)
  if(lar<sum){
    lar=sum
    ind=i
  }
}
return [ind,lar]
};