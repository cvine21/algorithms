/*
994. Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


Example 1:
	Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
	Output: 4
Example 2:
	Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
	Output: -1
	Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:
	Input: grid = [[0,2]]
	Output: 0
	Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.


Constraints:
	m == grid.length
	n == grid[i].length
	1 <= m, n <= 10
	grid[i][j] is 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let minutes = 0;
	let fresh = 0;
	const queue = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) fresh++;
			else if (grid[i][j] === 2) queue.push([i, j]);
		}
	}

	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	while (queue.length && fresh) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			[r, c] = queue.shift();

			for (let [dr, dc] of directions) {
				const row = dr + r;
				const col = dc + c;

				if (
					row < 0 ||
					row === grid.length ||
					col < 0 ||
					col === grid[0].length ||
					grid[row][col] !== 1
				) {
					continue;
				}
				grid[row][col] = 2;
				queue.push([row, col]);
				fresh--;
			}
		}
		minutes++;
	}

	return !fresh ? minutes : -1;
};
