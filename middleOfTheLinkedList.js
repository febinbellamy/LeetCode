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
var middleNode = function (head) {
  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  let middleNodePosition =
    count % 2 === 0 ? count / 2 + 1 : Math.ceil(count / 2);
  current = head;
  count = 0;

  while (current) {
    count++;
    if (count === middleNodePosition) return current;
    current = current.next;
  }
};
