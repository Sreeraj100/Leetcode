/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const temp=num.toString().split('').sort()
return (Number(temp[0]+temp[2])+parseInt(temp[1]+temp[3]))
};