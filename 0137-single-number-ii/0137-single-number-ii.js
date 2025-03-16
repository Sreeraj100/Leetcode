/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res=0  
  let obj={}
  for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]){
       obj[nums[i]]++ 
    }else{
       obj[nums[i]]=1
    }
  }
 for(let val in obj){
    if(obj[val]<3){
     res=Number(val)
    }
 }
return res

};