/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Since the result should be 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // Return an empty array if no solution is found
};