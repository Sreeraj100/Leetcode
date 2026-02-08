/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count=0
    for(let i of details){
        if(i.slice(11,13)>60){
            count++
        }
    }
    return count
};