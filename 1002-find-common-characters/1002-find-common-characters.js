/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let res = [];
    for (let wo of words[0]) {
        if (words.every((word) => word.includes(wo))) {
            res.push(wo)
            words = words.map((word) => word.replace(wo, ""))
        }
    }
    return res
};