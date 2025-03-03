/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
// let count=0
// if(num<10){
//     return 0
// }else if(num==1){
//  return 1
// }else{
//     while(num>10){
// num=num.toString().split('').reduce((a,c)=>Number(a)+Number(c),0)
// count++
//     }
// }
// return count
return 1 + (num - 1) % 9;
};