/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.


Example 1:
	Input: root = [1,null,2,3]
	Output: [1,3,2]
Example 2:
	Input: root = []
	Output: []
Example 3:
	Input: root = [1]
	Output: [1]


Constraints:
	The number of nodes in the tree is in the range [0, 100].
	-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/*  Definition for a binary tree node. */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* Recursive approach (Trivial) */
// var inorderTraversal = function (root) {
// 	const res = [];

// 	if (!root) return [];

// 	res.push(...inorderTraversal(root.left));
// 	res.push(root.val);
// 	res.push(...inorderTraversal(root.right));

// 	return res;
// };

/* Iterative approach */
var inorderTraversal = function (root) {
	if (!root) return [];

	const res = [];
	const stack = [];

	let cur = root;
	while (cur || stack.length) {
		if (cur) {
			stack.push(cur);
			cur = cur.left;
		} else {
			cur = stack.pop();
			res.push(cur.val);
			cur = cur.right;
		}
	}

	return res;
};
