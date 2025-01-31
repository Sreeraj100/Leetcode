/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj={} 
    let sum=0
    for(let i=0;i<nums.length;i++){
     if(obj[nums[i]]){
        obj[nums[i]]++
     }else{
        obj[nums[i]]=1
     }
    }
    for(let val in obj){
        if(obj[val]==1){
            sum+=Number(val)
        }
    }
    return sum
};