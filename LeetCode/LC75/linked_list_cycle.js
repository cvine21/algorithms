/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.


Example 1:
	Input: head = [3,2,0,-4], pos = 1
	Output: tail connects to node index 1
	Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:
	Input: head = [1,2], pos = 0
	Output: tail connects to node index 0
	Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:
	Input: head = [1], pos = -1
	Output: no cycle
	Explanation: There is no cycle in the linked list.

Constraints:
	The number of the nodes in the list is in the range [0, 104].
	-105 <= Node.val <= 105
	pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let slow = head;
	let fast = head;
	let index = 0;

	while (fast && fast.next) {
		fast = fast.next.next;
		if (slow === fast) {
			while (index--) {
				head = head.next;
			}
			return head;
		}
		slow = slow.next;
		++index;
	}

	return null;
};

/*Example 1 */
// let list1 = new ListNode(1);
// let list2 = new ListNode(2);
// let list3 = new ListNode(3);
// let list4 = new ListNode(4);

// list1.next = list2;
// list2.next = list3;
// list3.next = list4;
// list4.next = list2; // cycle

// console.log(detectCycle(list1));

/* Example 2 */
// let list1 = new ListNode(1);
// let list2 = new ListNode(2);

// list1.next = list2;
// list2.next = list1;

// console.log(detectCycle(list1));

/* Example 3 */
let list1 = new ListNode(1);
let list2 = new ListNode(2);

console.log(detectCycle(list1));
