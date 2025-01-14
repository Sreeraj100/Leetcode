/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
for(let i=0;i<nums.length;i++){
    let isUnique=true
     if (nums[i] === nums[i - 1] || nums[i] === nums[i + 1]) {
        isUnique=false
    }
    if(isUnique){
     return nums[i]
    }
    
}
};