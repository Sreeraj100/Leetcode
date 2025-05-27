/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let obj={}
for(let i of s){
    if(obj[i]){
        obj[i]++
    }else{
        obj[i]=1
    }
}

let res=[]
let arr=Object.values(obj).sort((a,b)=>b-a)
console.log(obj,arr)
for(let i=0;i<arr.length;i++){
    for(let char in obj){
           if(obj[char]==arr[i]){
               for(let j=0;j<arr[i];j++){
                   res.push(char)
               }
               delete obj[char]
               break
           } 
    }

} 
console.log(obj)
return res.join('')
};