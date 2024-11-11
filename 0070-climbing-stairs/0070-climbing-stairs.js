/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n===0)return 1;
    if (n===1)return 1;
    let ways1=1;
    let ways2=1;
    for (let i=2;i<=n;i++){
        let current = ways1+ways2;
        ways2=ways1;
        ways1=current;

    }
    return ways1;
};
