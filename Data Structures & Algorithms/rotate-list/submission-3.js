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
    rotateRight(head, k) {
        if(!head || !head.next){
            return head;
        }

        const n = this.findLength(head, k);
        k = k % n;

        if(k == 0){
            return head;
        }

        let prev = head;

        for(let i=0; i<n-k-1; i++){
            prev = prev.next
        }

        let headB = prev.next;
        prev.next = null;

        let tempHeadB = headB;

        for(let i=0; i<k-1; i++){
            tempHeadB = tempHeadB.next;
        }

        tempHeadB.next = head;

        return headB

    }

    findLength(head){
        let count = 0;
        while(head){
            head = head.next;
            count++;
        }

        return count;
    }
}
