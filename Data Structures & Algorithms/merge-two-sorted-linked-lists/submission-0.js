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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        if(!l1 && !l2){
            return null
        }

        if(!l2){
            return l1
        }

        if(!l1){
            return l2
        }

        let ans = new ListNode();
        let ansHead = ans;

        while(l1 && l2){
            if( l1.val > l2.val){
                ans.next = l2
                l2 = l2.next;
            }else{
                ans.next = l1
                l1 = l1.next
            }

            ans = ans.next;

            if(!l1){
                ans.next = l2;
            }

            if(!l2){
                ans.next = l1
            }
           
        }

        return ansHead.next;
    }
}
