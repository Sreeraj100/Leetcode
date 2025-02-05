/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
   let arr=[]
    let sort=nums.sort((a,b)=>a-b)
    for(let i=0;i<sort.length;i+=2){
    arr.push(sort[i+1])
    arr.push(sort[i])
    }
    return arr
};