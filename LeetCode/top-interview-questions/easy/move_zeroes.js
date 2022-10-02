/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
	Input: nums = [0,1,0,3,12]
	Output: [1,3,12,0,0]

Example 2:
	Input: nums = [0]
	Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	for (let i = 0, nonZero = 0; i < nums.length; ++i) {
		if (nums[i]) {
			if (i !== nonZero) {
				nums[nonZero] = nums[i];
				nums[i] = 0;
			}
			++nonZero;
		}
	}
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums); // [1,3,12,0,0]
console.log(nums);

// let nums = [0];
// moveZeroes(nums); // [0]
// console.log(nums);

// let nums = [1, 2, 3];
// moveZeroes(nums); // [1, 2, 3];
// console.log(nums);

// let nums = [0, 0, 1, 2, 3];
// moveZeroes(nums); // [1, 2, 3, 0, 0];
// console.log(nums);

// let nums = [
// 	73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0,
// ];
// moveZeroes(nums); // [73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0];
// console.log(nums);
