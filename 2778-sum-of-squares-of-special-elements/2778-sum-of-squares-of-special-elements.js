/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
let len=nums.length;
let n = 0;
for(let i=1;i<=len;i++){
    if(len%i==0){
        n+= nums[i-1]*nums[i-1]
    }
    
}return n
};