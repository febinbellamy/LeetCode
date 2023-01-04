/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let currentA = headA;
  let currentB = headB;

  while (currentA !== currentB) {
    if (currentA === null) {
      currentA = headB;
    } else {
      currentA = currentA.next;
    }

    if (currentB === null) {
      currentB = headA;
    } else {
      currentB = currentB.next;
    }
  }
  return currentA;
};
