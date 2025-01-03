/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let out=[]
for(let i=0;i<arr.length;i++){
let lar=-1    
for(let j=i+1;j<arr.length;j++){
    if(arr[j]>lar){
        lar=arr[j]
    }
   
   }
   out.push(lar) 
}
return out 
};