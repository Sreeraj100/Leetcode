/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Math.min(...prices)
    let ind=prices.indexOf(min)
    let arr=prices.slice(ind)
    let max=Math.max(...arr)
    if(arr.length>1){
        return max-min
    }else{
        return 0
    }
};