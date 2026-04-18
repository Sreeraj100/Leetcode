/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    let count = 0
    let front = String(n.toString(2))
    let back = front.split('').reverse().join('')

    for (let i = 0; i < front.length; i++) {
        if (front[i] !== back[i]) {
            count++
        }
    }

    return count
};