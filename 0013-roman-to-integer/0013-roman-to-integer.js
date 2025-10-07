/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let out = 0
    for (let i = 0; i < s.length; i += 1) {
        if (symbols[s[i]] < symbols[s[i + 1]]) {
            out -= symbols[s[i]]
        } else {
            out += symbols[s[i]]
        }
    }
    return out

};