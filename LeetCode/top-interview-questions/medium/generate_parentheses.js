/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
  Input: n = 1
  Output: ["()"]
 

Constraints:
  1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const backtracking = (left, right, cur) => {
    if (cur.length === n * 2) {
      return res.push(cur.join(""));
    }

    if (left > 0) {
      cur.push("(");
      backtracking(left - 1, right, cur);
      cur.pop();
    }
    if (left < right) {
      cur.push(")");
      backtracking(left, right - 1, cur);
      cur.pop();
    }
  };

  backtracking(n, n, []);

  return res;
};
