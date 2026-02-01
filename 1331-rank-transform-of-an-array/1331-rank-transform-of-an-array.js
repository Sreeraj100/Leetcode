/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
let Rank=[...new Set(arr)]
Rank.sort((a,b)=>a-b)
let res=[]
let obj={}
for(let i=0;i<Rank.length;i++){
    if(!obj[Rank[i]]){
        obj[Rank[i]]=i+1
    }
}
for(let i=0;i<arr.length;i++){
    res.push(obj[arr[i]])
    
}
return res
};