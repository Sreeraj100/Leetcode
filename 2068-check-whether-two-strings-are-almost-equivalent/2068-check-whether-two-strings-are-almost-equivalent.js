/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
 let result = true;
    let arr1 = word1.split('');
    let arr2 = word2.split('');
    let obj = {};
    let obj1 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (obj1[arr1[i]]) {
            obj1[arr1[i]]++;
        } else {
            obj1[arr1[i]] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]]) {
            obj[arr2[i]]++;
        } else {
            obj[arr2[i]] = 1;
        }
    }

    // Merge both keys and check the difference
    for (let key in obj1) {
        let diff = Math.abs((obj1[key] || 0) - (obj[key] || 0));
        if (diff > 3) {
            result = false;
            break;
        }
    }

    for (let key in obj) {
        if (!(key in obj1)) {
            let diff = Math.abs((obj1[key] || 0) - (obj[key] || 0));
            if (diff > 3) {
                result = false;
                break;
            }
        }
    }

    return result;

};