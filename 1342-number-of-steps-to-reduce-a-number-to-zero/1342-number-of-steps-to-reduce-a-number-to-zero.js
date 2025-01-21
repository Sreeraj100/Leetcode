/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {

let output=0    
while(num!==0){
if(num%2==0){
  num=num/2 
  output++
}else if(num%2!==0){
    num=num-1
    output++
}
}
return output

};