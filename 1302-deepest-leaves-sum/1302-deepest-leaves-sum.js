/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
     if (!root)
        return 0
    
    let cache = []
    const rec = (root, depth = 0) => {
        if (!root)
            return 0
        
        
        cache[depth] = (cache[depth] || 0) + root.val
        
        rec(root.left, depth + 1)
        rec(root.right, depth + 1)
    }
    
    rec(root)
    return cache[cache.length - 1]
};