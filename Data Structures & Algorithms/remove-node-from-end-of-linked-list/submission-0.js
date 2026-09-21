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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let sentinel = new ListNode();
        sentinel.next = head;
        let firstPointer = sentinel;
        let secondPointer = head;

        for(let i=0; i<n; i++){
            secondPointer = secondPointer.next;
        }

        while(secondPointer){
            firstPointer = firstPointer.next
            secondPointer = secondPointer.next;
        }

        let prev = firstPointer;
        prev.next = prev.next.next;

        return sentinel.next
    }
}
