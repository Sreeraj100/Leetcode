/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let count = 0;
    for (let i=0;i<10;i++){
        if(rings.includes(`R${i}`)&&rings.includes(`G${i}`)&&rings.includes(`B${i}`)){
        count++
        } 
    } return count
};