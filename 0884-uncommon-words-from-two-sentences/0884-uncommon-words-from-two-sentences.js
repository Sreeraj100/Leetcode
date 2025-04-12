/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
let words1=s1.split(' ')
let words2=s2.split(' ')
let arr=words1.concat(words2)
let obj={}
let res=[]
for(let wrd of arr){
 if(obj[wrd]){
    obj[wrd]++
 }else{
    obj[wrd]=1
 }
}
for(let val in obj){
    if(obj[val]==1){
        res.push(val)
    }
}
return res

};