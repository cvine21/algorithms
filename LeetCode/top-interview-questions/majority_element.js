/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
	Input: nums = [3,2,3]
	Output: 3

Example 2:
	Input: nums = [2,2,1,1,1,2,2]
	Output: 2
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const sorted = nums.sort((a, b) => a - b);
	for (let i = sorted.length; i >= sorted.length / 2; --i) {
		if (i - sorted.indexOf(sorted[i]) + 1 > nums.length / 2)
			return sorted[i];
	}
};

console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
