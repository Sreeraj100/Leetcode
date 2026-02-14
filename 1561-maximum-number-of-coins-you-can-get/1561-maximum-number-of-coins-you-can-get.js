/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b)
    let r = piles.length
    let count = 0

    for (let i = 0; i < piles.length / 3; i++) {
        count += piles[r - 2]
        r -= 2
    }
    return count
};