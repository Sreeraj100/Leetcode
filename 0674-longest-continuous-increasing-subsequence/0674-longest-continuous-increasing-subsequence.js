/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count=1
    let lar=1
   for(let i=0;i<nums.length;i++){
    if(nums[i]<nums[i+1]){
       count++ ;
       lar = Math.max(lar,count)
    }else {
        count = 1}
}
return lar 
};