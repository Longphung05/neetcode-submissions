/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const bella = (root) =>
        {
            if(!root){
                return [0, true];
            }
            let leftTree = bella(root.left);
            let rightTree = bella(root.right);
            let balance = leftTree[1] && rightTree[1] && Math.abs(leftTree[0] - rightTree[0]) <= 1;

            return [Math.max(leftTree[0], rightTree[0]) + 1, balance];
            

        }
        return bella(root)[1];

    }
}
