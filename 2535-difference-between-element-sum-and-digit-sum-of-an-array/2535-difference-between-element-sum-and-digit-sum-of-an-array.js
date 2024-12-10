/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
 let sum=nums.reduce((a,b)=>a+b)
let digsum=0
let str=nums.join('').split('')
for(let i=0;i<str.length;i++){
    digsum+=Number(str[i])
}
return sum-digsum   
};