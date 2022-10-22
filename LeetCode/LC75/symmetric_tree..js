/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


Example 1:
	Input: root = [1,2,2,3,4,4,3]
	Output: true
Example 2:
	Input: root = [1,2,2,null,3,null,3]
	Output: false
 
Constraints:
	The number of nodes in the tree is in the range [1, 1000].
	-100 <= Node.val <= 100


Follow up: Could you solve it both recursively and iteratively?
*/

/* Definition for a binary tree node. */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
 * Recursive approach
 */
// var isSymmetric = function (root) {
// 	const dfs = (l, r) => {
// 		if (!l || !r) return l == r;
// 		if (l.val !== r.val) return false;

// 		return dfs(l.left, r.right) && dfs(l.right, r.left);
// 	};

// 	return dfs(root.left, root.right);
// };

/*
 * Iterative approach
 */
var isSymmetric = function (root) {
	const queue = [root.left, root.right];

	while (queue.length) {
		const l = queue.shift();
		const r = queue.shift();

		if (!l && !r) continue;
		if (!l || !r || l.val !== r.val) return false;

		queue.push(l.left, r.right, r.left, l.right);
	}

	return true;
};

console.log(
	isSymmetric(
		new TreeNode(
			1,
			new TreeNode(
				2,
				new TreeNode(3, null, null),
				new TreeNode(4, null, null)
			),
			new TreeNode(
				2,
				new TreeNode(4, null, null),
				new TreeNode(3, null, null)
			)
		)
	)
); // true
console.log(
	isSymmetric(
		new TreeNode(
			1,
			new TreeNode(2, null, new TreeNode(3, null, null)),
			new TreeNode(2, null, new TreeNode(3, null, null))
		)
	)
); // false
console.log(
	isSymmetric(
		new TreeNode(
			1,
			new TreeNode(2, null, null),
			new TreeNode(3, null, null)
		)
	)
); //false
console.log(isSymmetric(new TreeNode(1, null, null))); // true
