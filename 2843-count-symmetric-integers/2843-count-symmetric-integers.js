/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let count=0
  let s=low<10?11:low
  for(let i=s;i<=high;i++){
    let str=i.toString()
    if(str.length%2==0){
    let l=str.slice(0,str.length/2).split('').reduce((a,c)=>a+Number(c),0)
    let r=str.slice(str.length/2).split('').reduce((a,c)=>a+Number(c),0)
    if(l==r)count++
    }
  }  
  return count
};