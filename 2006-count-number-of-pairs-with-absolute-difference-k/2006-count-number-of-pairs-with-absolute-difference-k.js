/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count=0
    nums.sort((a,b)=>b-a)
    for(let i=0;i<nums.length-1;i++){
     for(let j=i+1;j<nums.length;j++){
     if(nums[i]-nums[j]==k){
        count++
     }

      }

    }
    return count

};