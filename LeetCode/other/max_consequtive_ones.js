/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
	Input: nums = [1,1,0,1,1,1]
	Output: 3
	Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:
	Input: nums = [1,0,1,1,0,1]
Output: 2


Constraints:
	1 <= nums.length <= 105
	nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let max = 0;
	let cur = 0;

	nums.forEach((item) => {
		if (item === 1) ++cur;
		else {
			if (cur > max) max = cur;
			cur = 0;
		}
	});

	return Math.max(max, cur);
};
