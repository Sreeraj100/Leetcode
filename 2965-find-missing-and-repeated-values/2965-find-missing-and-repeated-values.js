/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let res=[]
    let obj={}
    let arr=grid.flat()
    for(let i of arr){
        obj[i]?res.push(i):obj[i]=1 
    }
    let set = new Set(arr)
    let m=Math.max(...arr,arr.length)
    let s=Math.min(...arr)
    for(let i=s;i<=m;i++){
        if(!set.has(i)){
            res.push(i)
        }
    }
    return res
};