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
    zigzagLevelOrder(root) {
        let ans = [];
        let queue = [root];
        let level = 1;

        if(!root){
            return [];
        }

        while(queue.length){
        let arr = []
        let levelSize = queue.length
            for(let i=0; i<levelSize; i++){
                let curr = queue.shift();

                if(level % 2 === 0){
                arr.unshift(curr.val);
                   

                }else{
                    arr.push(curr.val)

                }

                curr.left && queue.push(curr.left);
                curr.right && queue.push(curr.right);
            }

            
            level++
            ans.push(arr)
        }

        return ans;
    }
}
