/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
 
    let str =String(num)
    let arr = str.split("").map((x)=>+x).sort((a,b)=>a-b)
    let str1 = ""
    let str2 = ""
    let i = 0
    for(let digit of arr){
        if(i%2===0){
            str1+=digit
        }else{
            str2+=digit
        }
        i++
    }
    return +str1 + +str2 
};