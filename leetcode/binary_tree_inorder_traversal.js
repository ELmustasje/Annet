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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let l = [];
  travel(root, l);
  return l;
};

var travel = function(node, l) {
  if (node === null) {
    return;
  }
  travel(node.left, l);
  l.push(node.val);
  travel(node.right, l)

}
