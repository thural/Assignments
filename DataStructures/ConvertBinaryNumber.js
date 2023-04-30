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
const getDecimalValue = function (head) {
    let current = head.next
    let result = head.val
    while (current) {
      result = result * 2 + current.val
      current = current.next
    }
    return result
  }