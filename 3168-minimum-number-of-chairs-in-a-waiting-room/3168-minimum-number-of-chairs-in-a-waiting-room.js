/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {

   let res = 0
    let entered = 0
    let leaved = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "E") {
            entered++
        } else {
            leaved++
        }
        res = Math.max(entered - leaved, res)
    }
    return res 
};