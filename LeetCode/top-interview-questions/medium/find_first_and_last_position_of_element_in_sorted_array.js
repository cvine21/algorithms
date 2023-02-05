/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example 1:
	Input: nums = [5,7,7,8,8,10], target = 8
	Output: [3,4]
Example 2:
	Input: nums = [5,7,7,8,8,10], target = 6
	Output: [-1,-1]
Example 3:
	Input: nums = [], target = 0
	Output: [-1,-1]


Constraints:
	0 <= nums.length <= 105
	-109 <= nums[i] <= 109
	nums is a non-decreasing array.
	-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	const leftBias = (leftBias) => {
		let left = 0;
		let right = nums.length - 1;
		let index = -1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			if (target > nums[mid]) {
				left = mid + 1;
			} else if (target < nums[mid]) {
				right = mid - 1;
			} else {
				index = mid;
				if (leftBias) {
					right = mid - 1;
				} else {
					left = mid + 1;
				}
			}
		}

		return index;
	};

	return [leftBias(true), leftBias(false)];
};
