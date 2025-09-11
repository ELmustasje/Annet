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
 * @return {number}
 */
var maxDepth = function(root) {
  return dfs(root, 0)
};

var dfs = function(root, n) {
  if (root == null) {
    return n;
  }
  const l = dfs(root.left, n + 1);
  const r = dfs(root.right, n + 1);

  max = l > r ? l : r;
  return max;
}
