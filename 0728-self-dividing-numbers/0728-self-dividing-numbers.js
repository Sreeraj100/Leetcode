/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const output = []
    const isDivingNumber = (number) => {
        const string = number.toString()
        for (let i = 0; i < string.length; i++) {
            if (string[i] === '0' || number % Number(string[i])) return false
        }
        return true
    }
    for (let i = left; i <= right; i++) {
        if (isDivingNumber(i)) output.push(i)
    }
    return output
};