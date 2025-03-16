/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res=[] 
  let obj={}
  for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]){
       obj[nums[i]]++ 
    }else{
       obj[nums[i]]=1
    }
  }
 for(let val in obj){
    if(obj[val]<2){
     res.push(Number(val))
    }
 }
return res
};