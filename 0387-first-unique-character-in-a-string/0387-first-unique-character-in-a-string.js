/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
let arr = s.split('') 
let a=""   
let obj = {}
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }else{
        obj[arr[i]]=1
    }
}

for(let val in obj){
    if(obj[val]==1){
        a=val
        break
    }
}

if(a != ""){
    return arr.indexOf(a)
}else{
    return -1
}

};