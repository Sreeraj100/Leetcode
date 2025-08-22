/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
salary.sort((a,b)=>a-b)
salary.shift()
salary.pop()
let sum = salary.reduce((a,c)=>a+c,0)
return sum/salary.length

};