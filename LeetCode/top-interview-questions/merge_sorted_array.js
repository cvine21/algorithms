/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
	let tmp;
	let i1 = m - 1;
	let i2 = n - 1;
	let j = m + n - 1;

	while (j >= 0) {
		if (i2 < 0 || nums1[i1] > nums2[i2]) {
			nums1[j--] = nums1[i1--];
		} else {
			nums1[j--] = nums2[i2--];
		}
	}

	return nums1;
};

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1);

// let nums1 = [1];
// let m = 1;
// let nums2 = [];
// let n = 0;

// merge(nums1, m, nums2, n);
// console.log(nums1);

let nums1 = [0];
let m = 0;
let nums2 = [1];
let n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
