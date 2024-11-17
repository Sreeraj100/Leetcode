/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join("")); // Convert array to a big number (handle large cases)
    num += 1n; // Increment by 1
    return num.toString().split("").map(Number);
};