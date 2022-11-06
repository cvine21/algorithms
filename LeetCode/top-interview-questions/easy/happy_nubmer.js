/*
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

	Starting with any positive integer, replace the number by the sum of the squares of its digits.
	
	Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

	Those numbers for which this process ends in 1 are happy.
	Return true if n is a happy number, and false if not.

Example 1:
	Input: n = 19
	Output: true
	Explanation:
	12 + 92 = 82
	82 + 22 = 68
	62 + 82 = 100
	12 + 02 + 02 = 1

Example 2:
	Input: n = 2
	Output: false
*/

const squaresSum = (num) => {
	let next = 0;

	for (let n = num; n / 10; n = Math.floor(n / 10)) {
		next += (n % 10) ** 2;
	}

	return next;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const hashSet = [];

	for (let next = n; !hashSet.includes(next); next = squaresSum(next)) {
		if (next === 1) return true;
		hashSet.push(next);
	}

	return false;
};

console.log(isHappy(19)); // true
console.log(isHappy(13)); // true
