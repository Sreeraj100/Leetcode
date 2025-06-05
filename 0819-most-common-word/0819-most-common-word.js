/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
   paragraph = paragraph.toLowerCase().replace(/[^a-z\s]/g, ' ');
    
    let arr = paragraph.split(/\s+/); // split by one or more spaces
    let obj = {};

    for (let i of arr) {
        if (i === '' || banned.includes(i)) continue; // skip empty or banned words
        obj[i] ? obj[i]++ : obj[i] = 1;
    }

    let lar = 0;
    let word = '';
    for (let i in obj) {
        if (obj[i] > lar) {
            lar = obj[i];
            word = i;
        }
    }

    return word;

};