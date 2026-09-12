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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSameTree = (p,q) => {
            if(!p && !q) return true;
            else if(!p || !q) return false;
            else if(p.val != q.val) return false;
            return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
        }
        if(!root) return false;

        else if(isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);



        
        


    }
}
