/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
     let result = 0;
    let ones = 0;
    let use = false;
    
    for (let c of s) {
        if (c === '0') {
            use = true;
        } else {
            if (use) {
                result += ones;
            }
            ones++;
            use = false;
        }
    }
    
    if (use) {
        result += ones;
    }
    
    return result;
};