/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length !== 2){
        let temp = []
        for (let i = 1; i < s.length; i++){
            let sum = (Number(s[i - 1]) + Number(s[i])) % 10
            temp.push(sum.toString())
        }
        s = temp.join('')
    }
    return s[0] === s[1]

};