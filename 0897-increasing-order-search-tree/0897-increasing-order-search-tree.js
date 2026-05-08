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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
        var ptr = new TreeNode(-1)
    var curr = ptr
    inorder = ((root) => {
        if(root == undefined)
            return
        inorder(root.left)
        curr.right = new TreeNode(root.val)
        curr = curr.right
        inorder(root.right)
        return
    })
    inorder(root)
    return ptr.right

};