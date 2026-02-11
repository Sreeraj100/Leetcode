/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let arr=[]
    let result=[]
    for(let i=0;i<groupSizes.length;i++){
     if(arr[groupSizes[i]]){
        arr[groupSizes[i]].push(i)
     }else{
        arr[groupSizes[i]]=[i]
     }
     if(arr[groupSizes[i]].length===groupSizes[i]){
        result.push(arr[groupSizes[i]])
        arr[groupSizes[i]]=''
     }
    }
    return result
};