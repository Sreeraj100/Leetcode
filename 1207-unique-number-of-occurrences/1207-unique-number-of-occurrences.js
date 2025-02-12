/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
//  let obj={}
//  for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }else{
//        obj[arr[i]]=1 
//     }
//  }
//  for(let val in obj){
//     if(obj[val]>)
//  }
let out=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
           out++ 
        }
    }
}
if(out<=0){
    return false
}else{
    return true
}



};