/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
     let ans = ''
    let cnt = 0
    for (i of s){
        if(i === '('){
            if(cnt) ans += i
            cnt++
        }else{
            cnt--
            if(cnt) ans += i
        }
    }
    return ans
};