/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    let diff=[]
    for(let i=0;i<arr.length;i++){  
       diff.push(arr[i+1]-arr[i]) 
    }
    diff.pop()
    let out=[...new Set(diff)].length
    if(out>1){
        return false
    }else{
        return true
    }
};