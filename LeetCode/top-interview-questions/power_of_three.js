/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:
	Input: n = 27
	Output: true
	Explanation: 27 = 33

Example 2:
	Input: n = 0
	Output: false
	Explanation: There is no x where 3x = 0.

Example 3:
	Input: n = -1
	Output: false
	Explanation: There is no x where 3x = (-1).
*/

/**
 * @param {number} n
 * @return {boolean}
 */
/* Math */
// var isPowerOfThree = function (n) {
// 	return (Math.log(n) / Math.log(3)).toFixed(10) % 1 === 0;
// };

/* Recursion */
var isPowerOfThree = function (n) {
	if (n === 3 || n === 1) return true;
	if (n < 3) return false;

	return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(-1)); // false
console.log(isPowerOfThree(1)); // false
