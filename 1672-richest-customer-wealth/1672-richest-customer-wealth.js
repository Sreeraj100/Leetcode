/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr=[]
    for(let i=0;i<accounts.length;i++){
       arr.push(accounts[i].reduce((a,b)=>a+b))
    }
    return Math.max(...arr)
};