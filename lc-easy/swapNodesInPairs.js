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
var swapPairs = function (head) {
  let index = 0;
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let current = dummyNode;

  while (current.next && current.next.next) {
    if (index % 2 === 0) {
      //  d->  1 -> 2  -> 3 -> 4 -> null

      let next = current.next;
      let nextNext = next.next;
      let nextNextNext = next.next.next;
      current.next = nextNext; // d -> 2
      nextNext.next = next; // d -> 2 -> 1
      next.next = nextNextNext; // d -> 2 -> 1 -> 3
      //.         c.  nN    n.  nNN
      current = current.next; //.   c
    } else {
      current = current.next;
    }
    index++;
  }
  return dummyNode.next;
};
