/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
   const arr = Array(num.length).fill(0);
    for (const char of num) {
        arr[Number(char)]++;
    }
    return arr.join('') === num;
};