/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let out=0
    for(let i=0;i<nums.length;i++){
    let val=Math.max(...nums)
    if(nums.includes(-val)){
      out =val
    }else{
        nums.splice(nums.indexOf(val),1)
        i--
    }
    }
return out==undefined || out==0 ? -1:out

};