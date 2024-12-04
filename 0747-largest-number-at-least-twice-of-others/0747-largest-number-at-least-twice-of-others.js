/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
 let largest=Math.max(...nums)
 
 let arr=[]
 let result=0
 let index=0
 for(let i=0;i<nums.length;i++){
      if(largest==nums[i]){
          index=i
      }else{
         arr.push(nums[i])
      } 
 }
 for(let j=0;j<arr.length;j++){
     if(largest<arr[j]*2){
         result=-1
         break
     }else{
        result=index
     }
 }   
    return result


};