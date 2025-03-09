/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]){
        obj[nums[i]]++
     }else{
        obj[nums[i]]=1
     }  
  } 
  let majority=0
  let lar =0
  for(let val in obj){
     if(lar<obj[val]){
        lar=obj[val]
        majority=val
     }
  }
  return Number(majority)
};