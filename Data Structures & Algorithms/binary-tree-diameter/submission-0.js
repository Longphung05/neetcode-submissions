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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;
        let heightmaxx = (root) => { 
            if(!root){
                return 0;
            }
            let leftHeight = heightmaxx(root.left,maxDiameter);
            let rightHeight  = heightmaxx(root.right, maxDiameter);
            let diameter = leftHeight + rightHeight;
            
            if(diameter > maxDiameter){
                maxDiameter = diameter;
            }
            return Math.max(leftHeight, rightHeight) + 1
        }

        heightmaxx(root);
        return maxDiameter;

        
    }
}
