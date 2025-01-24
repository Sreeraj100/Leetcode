/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let obj={}
    let lucky=-1
   for(let i=0;i<arr.length;i++){
   if(obj[arr[i]]){
    obj[arr[i]]++
   }else{
    obj[arr[i]]=1
   }
    
   } 
for(let key in obj){
if(obj[key]==key){
   lucky=obj[key]
}

}
return lucky

};