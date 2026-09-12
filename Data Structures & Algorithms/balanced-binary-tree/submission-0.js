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
            let [leftHeight, leftBalance] = bella(root.left);
            let [rightHeight, rightBalance] = bella(root.right);
            let balance = Math.abs(leftHeight- rightHeight) <= 1;

            return [Math.max(leftHeight, rightHeight) + 1, leftBalance && rightBalance && balance];
            

        }

        if(bella(root)[1])
        {
            return true;
        }
        else
        {
            return false
        }
    }
}
