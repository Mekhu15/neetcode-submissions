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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        if(!head){
    return head;
}
        let sentinleNode = new ListNode();
        sentinleNode.next = head;
        let prev = sentinleNode;

        while(prev && prev.next){
            if(prev.next.val === val){
                prev.next = prev.next.next
            }  
            else{
                prev = prev.next;
            }
        }
return sentinleNode.next
         
    }
}
