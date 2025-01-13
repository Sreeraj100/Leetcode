/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let arr=address.split('')
// console.log(arr)
let out=arr.map((val)=>val=='.'?'[.]':val)
return out.join('')
};