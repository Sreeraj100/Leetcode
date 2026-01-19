/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
  let arr=[]
  for(let i of nums){
    let str=i.toString().split('').reduce((a,c)=>Number(a)+Number(c),0)
    arr.push(str)
  }  
return Math.min(...arr)

};