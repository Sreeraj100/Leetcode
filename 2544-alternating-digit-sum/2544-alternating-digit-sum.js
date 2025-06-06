/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    

     const s = n.toString();
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const digit = parseInt(s[i]);
        if (i % 2 === 0) { 
            total += digit;
        } else {          
            total -= digit;
        }
    }
    return total; 
};