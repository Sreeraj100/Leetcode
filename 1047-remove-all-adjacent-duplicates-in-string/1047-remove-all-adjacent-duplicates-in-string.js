/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
 let arr=s.split('')
 console.log(arr)
   for(let i=1;i<arr.length;i++){
    if(arr[i-1]==arr[i]){
        
        arr.splice(i-1,2)
        i=0
    }
    
   } 
  return arr.join("")
};