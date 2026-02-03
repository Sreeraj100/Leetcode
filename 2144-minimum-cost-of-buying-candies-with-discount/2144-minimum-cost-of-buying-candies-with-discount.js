/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a)
    let totalCost = []
   if (cost.length < 3) {
        return cost.reduce((prev, cur) => prev + cur);
    }else {
        for (let i = 0; i < cost.length; i += 3) {
            totalCost.push(cost[i])
            cost[i + 1]?totalCost.push(cost[i + 1]):''
           console.log(totalCost)
        }
    }
    return totalCost.reduce((a, c) => a + c, 0)
};