/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let left=[]
    let right=[]
    let mid=[]
   for(let i of nums){
    if(i<pivot){
        left.push(i)
    }else if(i>pivot){
        right.push(i)
    }else{
        mid.push(i)
    }
   }
   return [...left,...mid,...right]
};