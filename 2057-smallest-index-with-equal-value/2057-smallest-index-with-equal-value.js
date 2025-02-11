/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
  let out=[]
  
    for (let i=0;i<nums.length;i++){
  if(i%10==nums[i]){
   out.push(i)
  }
}
if(out.length==0){
    return -1
}else{
    return Math.min(...out)
}
};