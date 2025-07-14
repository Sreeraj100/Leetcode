/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

  let total = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let valid = true;
        let temp = chars; // use original chars string

        for (let j = 0; j < word.length; j++) {
            if (temp.includes(word[j])) {
                temp = temp.replace(word[j], ''); // remove used letter
            } else {
                valid = false;
                break;
            }
        }

        if (valid) {
            total += word.length;
        }
    }

    return total;

};