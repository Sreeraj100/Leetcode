/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1=[]
    let arr2=[]
    nums1=[...new Set(nums1)]
    nums2=[...new Set(nums2)]
    for(let i of nums1){
        if(!nums2.includes(i)){
            arr1.push(i)
        }
    }
    for(let i of nums2){
        if(!nums1.includes(i)){
            arr2.push(i)
        }
    }
   return [[...arr1],[...arr2]]
};