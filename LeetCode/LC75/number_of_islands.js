/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:
	Input: grid = [
	["1","1","1","1","0"],
	["1","1","0","1","0"],
	["1","1","0","0","0"],
	["0","0","0","0","0"]
	]
	Output: 1
Example 2:
	Input: grid = [
	["1","1","0","0","0"],
	["1","1","0","0","0"],
	["0","0","1","0","0"],
	["0","0","0","1","1"]
	]
	Output: 3


Constraints:
	m == grid.length
	n == grid[i].length
	1 <= m, n <= 300
	grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
	const rLen = grid.length;
	const cLen = grid[0].length;
	let islandsCount = 0;

	function dfs(grid, i, j) {
		if (i < 0 || i >= rLen || j < 0 || j >= cLen || grid[i][j] == "0") {
			return;
		}

		grid[i][j] = "0";

		dfs(grid, i + 1, j);
		dfs(grid, i - 1, j);
		dfs(grid, i, j + 1);
		dfs(grid, i, j - 1);
	}

	for (let i = 0; i < rLen; i++) {
		for (let j = 0; j < cLen; j++) {
			if (grid[i][j] == "1") {
				dfs(grid, i, j);
				++islandsCount;
			}
		}
	}

	return islandsCount;
};

console.log(
	numIslands([
		["1", "1", "1", "1", "0"],
		["1", "1", "0", "1", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "0", "0", "0"],
	])
);
console.log(
	numIslands([
		["1", "1", "0", "0", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "1", "0", "0"],
		["0", "0", "0", "1", "1"],
	])
);
