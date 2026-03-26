/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
     let s = [0]
    while (s.length < k) {
        const n = s.length
        for (let i = 0; i < n; i++) {
            s[n + i] = (s[i] + 1) % 26
        }
    }
    // console.log(s)
    return String.fromCharCode(s[k - 1] + 97)
};