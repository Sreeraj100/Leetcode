/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSum(nums) {
    const N = nums.length;
    let max = -1;

    for (let i = 0; i < N; ++i) {
        const maxDigit = getMaxDigit(nums[i]);

        for (let j = 0; j < i; ++j) {
            if (maxDigit == getMaxDigit(nums[j])) {
                max = Math.max(max, nums[i] + nums[j]);
            }
        }
    }

    return max;
}

function getMaxDigit(n) {
    let max = 0;

    while (n > 0) {
        const mod = n % 10;
        max = Math.max(max, mod);
        n = (n - mod) / 10;
    }

    return max;
}