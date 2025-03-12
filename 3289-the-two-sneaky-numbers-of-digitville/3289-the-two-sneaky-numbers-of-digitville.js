/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let obj={}
  for(let i of nums){
   if(obj[i]){
    obj[i]++
   }else{
    obj[i]=1
   } 
  } 
  let arr=[]
  for(let val in obj){
    if(obj[val]>1){
        arr.push(Number(val))
    }
  }
return arr

};