/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let arr=s.split('')
    let obj={}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]]=1
        }
    }

let out = Object.values(obj)
let result = [... new Set(out)]

if(result.length==1){
    return true 
}else{
    return false
}


};