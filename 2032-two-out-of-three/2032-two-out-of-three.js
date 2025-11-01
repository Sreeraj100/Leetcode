/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    
let arr=[...new Set(nums1),...new Set(nums2),...new Set(nums3)]
// let res=[...new Set(arr)]
let obj={}
let out=[]
for(let i of arr){
    obj[i]?obj[i]++:obj[i]=1
    if(obj[i]==2){
     out.push(i)
    }
}
console.log(out)
return out
};