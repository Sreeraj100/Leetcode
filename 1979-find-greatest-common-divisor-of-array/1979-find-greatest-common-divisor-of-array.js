/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let lar=Math.max(...nums)
    let min=Math.min(...nums )
        const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    return gcd(lar, min);
};