/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
let Rank=[...new Set(arr)]
Rank.sort((a,b)=>a-b)
let res=[]
console.log(Rank)
for(let i=0;i<arr.length;i++){
    res.push(Rank.indexOf(arr[i])+1)
    
}
return res


};