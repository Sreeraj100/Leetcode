/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
   let nums=num.toString().split('') 
   let count=0
   for(let i=0;i<nums.length;i++){
    if(num%Number(nums[i])==0){
        count++
    }
   }
   return count
};