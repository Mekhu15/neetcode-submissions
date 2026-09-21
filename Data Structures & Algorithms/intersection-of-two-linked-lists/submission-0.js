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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        const length1 = this.findLength(headA);
        const length2 = this.findLength(headB);

        let diff = Math.abs(length1 - length2);
        let firstPointer;
        let secondPointer;

        if(length1 > length2){
            firstPointer = headA;
            secondPointer = headB;
        }else{
            firstPointer = headB;
            secondPointer = headA;
        }

        while(diff > 0){
            firstPointer = firstPointer.next;
            diff--;
        }

        while(secondPointer !== firstPointer){
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }

        return secondPointer;

    }

       
       findLength(head){
        let count = 0;

        while(head){
            count++;
            head = head.next;
        }

        return count

       }



}
