/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  let arr=[]
  for(let i of nums){
   let s=i.toString().split('').map((n)=>Number(n))
   arr.push(...s)
  }
  return arr
};