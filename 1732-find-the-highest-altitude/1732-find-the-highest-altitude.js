/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
let arr=[0]
let num=0
for(let i =0 ; i< gain.length; i++){
if(gain[i]>0){
num+=gain[i]
}else{
num+=gain[i]
}
arr.push(num)
}
return Math.max(...arr)

};