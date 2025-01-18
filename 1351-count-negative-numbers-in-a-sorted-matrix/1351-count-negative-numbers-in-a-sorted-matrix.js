/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let arr=grid.flat()
    let count=0
    for(let i=0;i<arr.length;i++){
     if(arr[i]<0){
        count++
     }

    }
    return count
};