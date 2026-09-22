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
     * @return {number[]}
     */
    rightSideView(root) {
  if (!root) return [];
    let ans = [];
    let q = [root];
    while (q.length) {
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            if (i === 0) {
                ans.push(curr.val);
            }
            if (curr.right) q.push(curr.right);
            if (curr.left) q.push(curr.left);
        }
    }
    return ans;
    }
}
