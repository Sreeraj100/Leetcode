/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
let result = 0;
    amount.sort((a, b) => a - b)
    while (amount[1] && amount[2]) {
        result++
        amount[1]--
        amount[2]--
        amount.sort((a, b) => a - b)
    }
    result += amount[2]

    return result
};