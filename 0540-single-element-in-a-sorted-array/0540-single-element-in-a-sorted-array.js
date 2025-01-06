/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  
  for(let i=0;i<nums.length;i++){
    let isUnique=true
    for(let j=i+1;j<nums.length;j++){
   if(nums[i]==nums[j]){
      isUnique=false
      nums.splice(i,1)
      
   }
      
    }
    
  if(isUnique){
return nums[i]
  }

  }  
};