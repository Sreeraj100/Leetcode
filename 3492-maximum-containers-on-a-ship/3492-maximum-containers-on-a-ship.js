/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {
  return (n*n>Math.floor(maxWeight/w))?Math.floor(maxWeight/w):n*n  
};