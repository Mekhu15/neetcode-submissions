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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return [];
        }

        let ans = [];
        let queue = [root];

        while(queue.length){
            let levelArray = [];
            const level = queue.length;
            for(let i=0; i<level; i++){
            const curr = queue.shift();

            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right)
            levelArray.push(curr.val);
            }
            ans.push(levelArray)
        }
        return ans;
    }
}
