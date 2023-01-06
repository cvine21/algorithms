/*
542. 01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.


Example 1:
  Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
  Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:
  Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
  Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:
  m == mat.length
  n == mat[i].length
  1 <= m, n <= 104
  1 <= m * n <= 104
  mat[i][j] is either 0 or 1.
  There is at least one 0 in mat.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let dist = Array.from(new Array(rows), () =>
    new Array(cols).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] == 0) {
        dist[i][j] = 0;
      } else {
        if (i > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        }
        if (j > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
        }
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j < cols - 1) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }

  return dist;
};
