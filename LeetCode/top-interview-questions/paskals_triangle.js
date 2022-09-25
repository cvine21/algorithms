/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:
	Input: numRows = 5
	Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
	Input: numRows = 1
	Output: [[1]]
*/

/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let result = [];

	for (let row = 0; row < numRows; ++row) {
		let arr = [];
		for (let column = 0; column <= row; ++column) {
			if (!column || column === row) {
				arr.push(1);
			} else {
				arr.push(result[row - 1][column - 1] + result[row - 1][column]);
			}
		}
		result.push(arr);
	}
	return result;
};

console.log(generate(0));
console.log(generate(1));
console.log(generate(5));
