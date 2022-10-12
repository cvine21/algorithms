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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const result = [];
	const queue = [root];
	let qLen = queue.length;

	while (qLen) {
		qLen = queue.length;
		const level = [];
		for (let i = 0; i < qLen; ++i) {
			const node = queue.shift();
			if (node) {
				level.push(node.val);
				queue.push(node.left);
				queue.push(node.right);
			}
		}
		if (level.length) result.push(level);
	}

	return result;
};
