/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let merged = [];
	let i1 = 0;
	let i2 = 0;

	while (i1 < list1.length || i2 < list2.length) {
		if (list1[i1] < list2[i2] || i2 === list2.length) {
			merged.push(list1[i1++]);
		} else {
			merged.push(list2[i2++]);
		}
	}

	return merged;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
