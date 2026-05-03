/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const result = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] % 2 !== nums[j] % 2) {
        count++
      }
    }
    result.push(count)
  }

  return result
};