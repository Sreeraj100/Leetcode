/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arr = x.toString().split('')
    let sum=arr.reduce((a,c)=>Number(a)+Number(c),0)
    console.log(sum)
    if(x%sum==0){
        return sum
    }else{
        return -1
    }
};