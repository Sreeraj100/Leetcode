/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0
    
    for (let i = left; i <= right; i++) {
        let setBits = i.toString(2).split('1').length - 1
        if (isPrime(setBits)) {
            count++
        }
    }
    
    return count
};

function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}