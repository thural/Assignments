/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 
const isPalindrome = (head) => {
  const reverse = (head) => {
    const aux = (current, acc) => {
      if (!current) {
        return acc
      }
      acc = {
        val: current.val,
        next: acc,
      }
      return aux(current.next, acc)
    }
    return aux(head, null)
  }
  const reversed = reverse(head)
  const compare = (c1, c2) => {
    if (!c1) {
      return true
    }
    if (c1.val === c2.val) {
      return compare(c1.next, c2.next)
    }
    return false
  }
  return compare(head, reversed)
}