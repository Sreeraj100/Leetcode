/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
let min=Math.min(...nums)
let max=Math.max(...nums)
if(nums.includes(target)){
  return nums.indexOf(target)
}else if(min>target){
    return nums.indexOf(min)
}else if(max<target){
   return nums.indexOf(max)+1 
}else{
    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            return i
        }
    }
}
 
  

};