/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
  let sum=0
  let obj={}
  for(let i of nums){
    obj[i]=(obj[i]||0)+1
  }  
  for(let i in obj){
    if(obj[i]%k==0){
        sum+=(Number(i)*Number(obj[i]))
    }
  }
  return sum
};