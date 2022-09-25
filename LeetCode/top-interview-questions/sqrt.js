/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/

/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let res = 0;
	while (res * res < x) {
		++res;
	}
	return res * res > x ? res - 1 : res;
};
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(0)); // 0
