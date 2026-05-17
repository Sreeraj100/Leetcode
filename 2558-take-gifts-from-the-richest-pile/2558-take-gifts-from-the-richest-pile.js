/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
   for(let i = 0; i < k; i++){
        gifts.sort((a,b) => a - b)
        let n = Math.floor(Math.sqrt(gifts.pop()))
        gifts.push(n)
    }
    return gifts.reduce((a,b) => a + b) 
};