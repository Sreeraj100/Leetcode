/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverse=s.split(' ')
let newarr=[]
for (let i=0;i<reverse.length;i++){
    newarr.push(reverse[i].split('').reverse().join(''))
}
return newarr.join(' ')
};