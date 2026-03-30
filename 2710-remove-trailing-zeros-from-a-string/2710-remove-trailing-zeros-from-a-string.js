/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr = num.split("")
    for (let i = 0; i <num.length-1; i++) {
        if (arr[arr.length - 1] == 0){
         arr.pop()
        } 
    }
    return arr.join("")
};