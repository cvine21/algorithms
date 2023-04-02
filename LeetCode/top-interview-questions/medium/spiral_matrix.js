//  54. Spiral Matrix

// Example 1:
//   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//   Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//   Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//   Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
//   m == matrix.length
//   n == matrix[i].length
//   1 <= m, n <= 10
//   -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;

  while (top < bottom && left < right) {
    // Traverse right
    for (let j = left; j < right; j++) {
      res.push(matrix[top][j]);
    }
    top += 1;

    //Traverse down
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right -= 1;

    if (!(top < bottom && left < right)) break;

    //Traverse left
    for (let j = right - 1; j >= left; j--) {
      res.push(matrix[bottom - 1][j]);
    }
    bottom -= 1;

    //Traverse up
    for (let i = bottom - 1; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }

  return res;
};
