/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
 const obj = {};
  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return nums.sort((a, b) => obj[a] === obj[b] ? b - a : obj[a] - obj[b])
};