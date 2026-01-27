/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let ans=[]
    for(let i=0;i<prices.length;i++){
        let min=0
        for(let j=i+1;j<prices.length;j++){
            if(prices[j] <= prices[i]){
                min=prices[j]
                break
            }
        }
        ans.push(prices[i]-min)
    }
    return ans
};