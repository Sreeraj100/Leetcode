/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let arr=num.split('')
// console.log(arr)
let out=[]
let obj={}
let max=0
let result=[]
for(let i of arr){
    if(obj[i]){
        obj[i]++
    }else{
        obj[i]=1
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]&&arr[i+1]==arr[i+2]){
        out.push(arr[i])
    }
}
if(out.length<1){
    return ""
}else{
    max=Math.max(...out)
for(let i=0;i<3;i++){
    result.push(max)
}
}
return result.join("")  

};