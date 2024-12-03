/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
let str=n.toString()
let product=1
let sum=0
for(let i=0;i<str.length;i++){
    sum+=Number(str[i])
    product*=Number(str[i])
}
return product-sum

};