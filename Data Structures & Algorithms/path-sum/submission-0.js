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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {

        let ans = false;

    const traverse = (curr, currSum) =>{
        if(!curr){
            return false;
        }

        let newSum = curr.val + currSum;

if(!curr.left && !curr.right){
       return newSum === targetSum
       }


        return traverse(curr.left, newSum) ||  traverse(curr.right, newSum)

     }

     return traverse(root, 0)


    }
}
