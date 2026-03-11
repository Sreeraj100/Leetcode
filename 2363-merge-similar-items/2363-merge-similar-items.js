/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
   const m1 = new Map(items1.map(([value, weight]) => [value, weight]));
    const ret = [];

    for (const [value, weight] of items2) {
        if (!m1.has(value)) {
        m1.set(value, weight);
        } else {
        m1.set(value, m1.get(value) + weight);
        }
    }

    for (const [value, weight] of m1.entries()) {
        ret.push([value, weight]);
    }

    ret.sort((a, b) => a[0] - b[0]); // Sort by value

    return ret;
};