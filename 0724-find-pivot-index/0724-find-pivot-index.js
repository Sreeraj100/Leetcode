/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
let ls=0
let rs= nums.reduce((a,c)=>a+c,0)

for(let i=0;i<nums.length;i++){
let curr=nums[i]
rs=rs-curr
if(ls==rs){
    return i
}
ls+=curr
}
return-1

};