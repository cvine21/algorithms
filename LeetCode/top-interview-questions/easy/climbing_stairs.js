/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let prev = 1;
	let current = 1;
	let tmp;
	for (let i = 0; i < n - 1; ++i) {
		tmp = current;
		current += prev;
		prev = tmp;
	}
	return current;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
