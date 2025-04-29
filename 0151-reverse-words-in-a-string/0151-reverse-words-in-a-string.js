/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

 let arr=s.trim().split(' ')
 let out=""
 for(let i=arr.length-1;i>=0;i--){
if(arr[i]!=''){
    out+=arr[i]+" "
}

 }
 return out.trim() 


};