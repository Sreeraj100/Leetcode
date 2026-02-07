/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
let res = ""
for (let i = 0; i < s.length; i++) {
  if (s[i] >= '0' && s[i] <= '9') {
    res = res.slice(0, -1)
  } else {
    res+= s[i]
  }
}
return res
};