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
    mergeTwoLists(list1, list2) {
        console.log(list1, list2)
        const array = []
        let currentList1= list1
        let currentList2= list2

        while(currentList1 != null  || currentList2 != null){
            if(currentList1 != null  && currentList2 != null){
                if(currentList1.val < currentList2.val){
                    array.push(currentList1)
                    currentList1 = currentList1.next
                } else if(currentList2.val < currentList1.val){
                    array.push(currentList2)
                    currentList2 = currentList2.next
                } else if(currentList2.val === currentList1.val){
                    array.push(currentList2)
                    currentList2 = currentList2.next
                    array.push(currentList1)
                    currentList1 = currentList1.next
                }
            }else if(currentList1 === null){
                array.push(currentList2)
                currentList2 = currentList2.next
            }else if(currentList2 === null){
                array.push(currentList1)
                currentList1 = currentList1.next
            }
        }


        for(let i = 0; i < array.length; i++){
            array[i].next = array[i + 1]? array[i + 1]: null
        }

        return array.length > 0? array[0]: null
    }
}
