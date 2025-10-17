/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

let arr=[]
let count=0
// for(let i=0;i<nums.length;i++){
    
//     if(nums[i]<=k){
//         return nums.length-i
//     }
// }
for(let i=nums.length-1;i>=0;i--){
  let collection = new Set(), count = 0

    while (collection.size !== k) {
        let pop = nums.pop()
        if (pop <= k) collection.add(pop);
        count += 1
    }

    return count
}


};