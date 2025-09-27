/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let p=arr.length/4
  let obj={}
  for(let i of arr){
    obj[i]?obj[i]++:obj[i]=1
  }
  for(let i in obj){
    if(obj[i]>p){
        return Number(i)
    }
  }
};