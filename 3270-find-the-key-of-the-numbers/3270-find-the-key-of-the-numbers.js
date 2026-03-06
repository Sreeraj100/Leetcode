/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let nbr1=num1.toString().padStart(4, "0")
    let nbr2=num2.toString().padStart(4, "0")
    let nbr3=num3.toString().padStart(4, "0")
    let res=""
    for(let i=0;i<4;i++){
        res+=Math.min(nbr1[i],nbr2[i],nbr3[i])
    }
   return Number(res)
};