/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:
	Input: l1 = [2,4,3], l2 = [5,6,4]
	Output: [7,0,8]
	Explanation: 342 + 465 = 807.
Example 2:
	Input: l1 = [0], l2 = [0]
	Output: [0]
Example 3:
	Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
	Output: [8,9,9,9,0,0,0,1]


Constraints:
	The number of nodes in each linked list is in the range [1, 100].
	0 <= Node.val <= 9
	It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let res = new ListNode();
	let start = res;
	let head1 = l1;
	let head2 = l2;
	let carry = 0;

	while (head1 || head2 || carry) {
		let sum = (head1?.val || 0) + (head2?.val || 0) + carry;

		res.next = new ListNode(sum % 10);
		res = res.next;
		carry = Math.floor(sum / 10);

		if (head1) head1 = head1.next;
		if (head2) head2 = head2.next;
	}

	return start.next;
};
