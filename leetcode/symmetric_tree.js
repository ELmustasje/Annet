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
var isSymmetric = function(root) {
  if (!root) return false;
  const q = [[root.left, root.right]];

  while (q.length) {
    const [l, r] = q.shift();
    if (l == null && r == null) continue;
    if (l == null || r == null) return false;
    if (l.val != r.val) return false;

    q.push([l.left, r.right]);
    q.push([l.right, r.left]);
  }
  return true;
};

