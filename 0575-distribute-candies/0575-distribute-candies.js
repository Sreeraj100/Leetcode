/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
let b = candyType.length/2;
let c = [... new Set(candyType)]
return Math.min(b,c.length)
};