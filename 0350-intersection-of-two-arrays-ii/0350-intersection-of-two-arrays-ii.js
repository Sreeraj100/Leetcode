/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
       let map = {};
    let result = [];

    // Count occurrences of each element in nums1
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    // Check nums2 against the map
    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--; // Decrease count in the map
        }
    }

    return result; 
};