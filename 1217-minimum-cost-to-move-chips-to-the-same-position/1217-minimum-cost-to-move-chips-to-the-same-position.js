/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evenCount=0
    let oddCount=0

    for(let i of position){
        if(i % 2 == 0){
            evenCount++
        }
        else{
            oddCount++
        }        
    }
    return Math.min(evenCount, oddCount)
};