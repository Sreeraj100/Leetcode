/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {

let arr=s.split('')
let out=[]
for(let i=0;i<arr.length;i++){
if(arr[i]=='i'){
    out.reverse()
}else{
    out.push(arr[i])
}
}

return out.join('')

};