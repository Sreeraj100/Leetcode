/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let temp = date.split('-')
    let res = []
    for (let i = 0; i < temp.length; i++){
     res.push(Number(temp[i]).toString(2))
    }
        
     return res.join('-')
};