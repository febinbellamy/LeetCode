/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (list1 && !list2) return list1;
  if (!list1 && list2) return list2;

  const listOneVals = [];
  const listTwoVals = [];
  let current1 = list1;
  while (current1) {
    listOneVals.push(current1.val);
    current1 = current1.next;
  }
  let current2 = list2;
  while (current2) {
    listTwoVals.push(current2.val);
    current2 = current2.next;
  }
  const sortedArr = [...listOneVals, ...listTwoVals].sort((a, b) => a - b);
  const dummyNode = new ListNode("0");
  let currentNodeNewLL = dummyNode;
  let index = 0;
  while (index < sortedArr.length) {
    let newNode = new ListNode(sortedArr[index]);
    currentNodeNewLL.next = newNode;
    currentNodeNewLL = currentNodeNewLL.next;
    index++;
  }
  return dummyNode.next;
};
