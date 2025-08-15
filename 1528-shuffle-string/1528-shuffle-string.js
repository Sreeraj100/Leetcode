/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = [];
    let result = "";
    for(let i=0; i<indices.length; i++) {
        arr[indices[i]] = s.charAt(i);
    }
    for(let i=0; i<arr.length; i++) {
        result = result + arr[i];
    }
    return result;
};