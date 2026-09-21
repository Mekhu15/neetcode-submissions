/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        //first check k if it exists or not

        let count  = 0; 
        let temp = head;

        while(count < k){
            if(!temp){
                return head
            }
            count++;
            temp = temp.next
        }

        let prev = this.reverseKGroup(temp, k)

        count = 0;
        temp = head;

        while(count < k){
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
            count++;
        }

        return prev;

    }
}
