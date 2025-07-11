/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
           

            let last = stack[stack.length - 1];

            if (
                (ch === ')' && last === '(') ||
                (ch === '}' && last === '{') ||
                (ch === ']' && last === '[')
            ) {
                stack.pop();
            } else {
                return false
            }
        }
    }

    return stack.length === 0

};