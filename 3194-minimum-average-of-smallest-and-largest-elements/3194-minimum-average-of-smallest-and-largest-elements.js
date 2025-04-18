/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    
let arr=[]
while(nums.length>0){
let min = Math.min(...nums);
let max = Math.max(...nums);
let average = (min + max) / 2;
arr.push(average);
let maxIndex = nums.indexOf(Math.max(...nums));
nums.splice(maxIndex, 1);
let minIndex = nums.indexOf(Math.min(...nums));
nums.splice(minIndex, 1);
}

return Math.min(...arr)
};