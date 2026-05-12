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
        const stack = []
        let current = head
        while(current != null){
            stack.push(current)
            current = current.next;
        }

        const newHead = stack[stack.length - 1]?? null

        while(stack.length > 0){
            const last = stack.pop()
            if(stack.length === 0){
                last.next = null
            }else{
                last.next = stack[stack.length - 1]
            }
        }

        return newHead

        

    }
}
