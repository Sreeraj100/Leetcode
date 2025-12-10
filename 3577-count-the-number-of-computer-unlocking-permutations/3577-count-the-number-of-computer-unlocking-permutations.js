/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
   const n = complexity.length

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= complexity[0]){
       return 0
        } 
    }

    let ans = 1
    const MOD = 10 ** 9 + 7

    for (let i = n - 1; i >= 1; i--) {
        ans = (ans * i) % MOD
    }

    return ans  
};