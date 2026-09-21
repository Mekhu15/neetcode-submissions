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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let ans =  new ListNode();
        let ansHead = ans;
        let carry = 0;
    
        while(l1 || l2 || carry){
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            carry = Math.floor(sum / 10);
            const digit = sum % 10;
            let newNode = new ListNode(digit);
            ans.next = newNode;
            l1 = l1 && l1.next;
            l2 = l2 && l2.next;
            ans = ans.next; 
        }

       return ansHead.next;

    }
}
