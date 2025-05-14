/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  
   let obj={}
   for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]){
        obj[nums[i]]++
    }else{
        obj[nums[i]]=1
    }
   }
let pair=0
let unique=0
for(let val in obj){
    if(obj[val]==1){
        unique++
    }else if(obj[val]==2){
        pair++
    }else if(obj[val]%2==0){
        pair+=obj[val]/2
    }else if(obj[val]%2!==0){
        pair++
        unique++
    }
}

return [pair,unique]


};