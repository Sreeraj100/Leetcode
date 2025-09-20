/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let obj={}
  for(let i of nums){
   obj[i]?obj[i]++:obj[i]=1
  }
  let arr=Object.entries(obj)
  arr.sort((a,b)=>b[1]-a[1])
  let out=[]
  for(let i=0;i<k;i++){
  out.push(Number(arr[i][0]))
  }
  return out
  

};