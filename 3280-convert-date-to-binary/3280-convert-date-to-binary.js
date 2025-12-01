/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   let parts = date.split('-')
    return parts.map(p => Number(p).toString(2)).join('-');

};