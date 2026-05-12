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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        while(head != null){
            const current = head
            const originalNext = head.next
            head.next = prev
            prev = current
            head = originalNext
        }

        return prev
    }
}
