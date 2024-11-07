/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 let rev=x.toString()
 return x==rev.split('').reverse().join('')
 
};
isPalindrome(121)
isPalindrome(1211)