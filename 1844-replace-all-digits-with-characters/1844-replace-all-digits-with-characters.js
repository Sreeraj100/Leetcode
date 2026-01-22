/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arr=s.split('')
    for(let i=0;i<arr.length;i++){
      if(!alp.includes(arr[i])){
        let prev=s.charCodeAt(i-1)
        arr[i]=String.fromCharCode(prev+Number(arr[i]))
      }
    }
    return arr.join('')
};