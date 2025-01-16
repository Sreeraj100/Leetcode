/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

let out=[]
let sum=0
for(let i=0;i<nums.length;i++){
sum+=nums[i]
out.push(sum)

}
return out

};