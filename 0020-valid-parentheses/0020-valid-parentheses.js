/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const bracketMap = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        // If char is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from stack if not empty, otherwise set it to null
            const topElement = stack.length > 0 ? stack.pop() : null;

            // Check if the top element matches the opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push onto stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets matched correctly
    return stack.length === 0;
};