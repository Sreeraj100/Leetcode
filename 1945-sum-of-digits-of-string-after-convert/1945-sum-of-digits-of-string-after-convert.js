/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
     let numStr = "";
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 96); // 'a' -> 1, 'b' -> 2, ..., 'z' -> 26
    }

    // Step 2: Perform k transformations
    let sumDigits = (num) => num.split('').reduce((sum, digit) => sum + Number(digit), 0);

    let result = numStr;
    while (k-- > 0) {
        result = sumDigits(result).toString();
    }

    return parseInt(result);
};