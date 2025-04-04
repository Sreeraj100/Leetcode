/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
 let pair=true   
if(nums.length==1){
    return true
}else{
for(let i=0;i<nums.length-1;i++){
    if(nums[i]%2==0 & nums[i+1]%2==0){
        pair = false
    }else if(nums[i]%2!=0 & nums[i+1]%2!=0){
        pair = false
    }

    
}
}
return pair
};