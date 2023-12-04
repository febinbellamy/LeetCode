/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  current = head;
  let prev = null;

  while (current) {
    if (count === n) {
      if (prev !== null) {
        prev.next = current.next;
        return head;
      } else {
        let LL = current.next;
        current.next = null;
        return LL;
      }
    }
    count -= 1;
    prev = current;
    current = current.next;
  }
};
