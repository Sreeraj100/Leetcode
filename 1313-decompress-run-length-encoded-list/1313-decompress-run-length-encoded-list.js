/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length-1;i+=2){
    let temp=new Array(nums[i]).fill(nums[i+1])
    arr.push(temp)
    }
    return arr.flat()
};