/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
let operations =0
for(let i=0;i<nums.length;i++){
    let remainder=nums[i]%3
    if(remainder!==0){
    operations++   
    }
     
    
    
}
  return operations  
};