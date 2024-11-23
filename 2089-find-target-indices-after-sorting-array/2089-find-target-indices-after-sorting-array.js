/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
let index=[]
let sort=nums.sort((a,b)=>a-b)
for (let i=0;i<sort.length;i++){
    if(sort[i]==target){
        index.push(i)
    }
}
return index
};