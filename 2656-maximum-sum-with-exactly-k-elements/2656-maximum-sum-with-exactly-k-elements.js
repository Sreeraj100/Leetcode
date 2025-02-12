/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {

let num=Math.max(...nums)
let out=[]
for(let i=0;i<k;i++){
out.push(num)
num+=1
}
return out.reduce((acc,curr)=>acc+curr)


};