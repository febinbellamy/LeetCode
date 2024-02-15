/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;

  const queue = [root];
  let valueToMatch = root.val;

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val !== valueToMatch) return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
