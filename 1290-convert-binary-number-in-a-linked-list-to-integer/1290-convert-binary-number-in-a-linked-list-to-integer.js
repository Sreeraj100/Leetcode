/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let arr=[]
    while(head){
    arr.push(head.val)
    head=head.next
    }
    let num=arr.join('')
    return parseInt(num,2)  
};