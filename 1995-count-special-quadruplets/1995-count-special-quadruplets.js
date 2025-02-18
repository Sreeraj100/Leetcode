/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
     let count = 0;
    let n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            for (let k = j + 1; k < n - 1; k++) {
                for (let l = k + 1; l < n; l++) {
                    if (nums[i] + nums[j] + nums[k] === nums[l]) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};