/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Return empty string if array is empty

    let prefix = strs[0]; // Start with the first string as a prefix

    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix length until the current string starts with it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return ""; // Return empty string if no common prefix
        }
    }

    return prefix;
};