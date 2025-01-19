/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

let cleanedString = s.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
let result = cleanedString.split("").reverse().join(''); // Reverse the cleaned string
return cleanedString.toLowerCase() === result.toLowerCase()

};