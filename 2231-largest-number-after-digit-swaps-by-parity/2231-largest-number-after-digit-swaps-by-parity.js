/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
let even=[]
let odd=[]
let res=[]
let arr=num.toString().split('')
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0){
    even.push(arr[i])
}else{
    odd.push(arr[i])
}
}
even.sort((a,b)=>b-a)
odd.sort((a,b)=>b-a)
console.log(even)
console.log(odd)
let eveindex=0,oddindex=0
for(let j=0;j<arr.length;j++){
    if(arr[j]%2==0){
        res.push(even[eveindex])
        eveindex++
    }else{
        res.push(odd[oddindex])
        oddindex++
    }
}
return Number(res.join(''))

};