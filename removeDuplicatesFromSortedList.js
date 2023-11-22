/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  // if there are 0 nodes or 1 node in the LL, return it.
  if (head === null || head.next === null) {
    return head;
  }

  // assuming there are 2 or more nodes in the LL:
  const visitedNodes = {};
  let prev = null;
  let next = null;
  let current = head;

  while (current !== null && current.next !== null) {
    if (visitedNodes[current.val]) {
      // if current node already exists, remove it by setting prev.next to current.next

      next = current.next;
      prev.next = next;
      current = next;
      next = current.next;
    } else {
      visitedNodes[current.val] = 1;
      next = current.next;
      prev = current;
      current = current.next;
    }
  }
  // check if tail is a duplicate. If so, remove it.
  if (visitedNodes[current.val]) {
    prev.next = current.next;
  }
  return head;
};
