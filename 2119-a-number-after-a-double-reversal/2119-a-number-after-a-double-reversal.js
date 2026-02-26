/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let sum=num.toString().split('').reduce((a,c)=>a+Number(c),0)
    if(sum===0){
        return true
    }else{
    let val=num.toString().split('').pop()
    return val==="0"?false:true
    }
   
};