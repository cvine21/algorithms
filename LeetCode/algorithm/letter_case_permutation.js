/*
784. Letter Case Permutation

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.


Example 1:
  Input: s = "a1b2"
  Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:
  Input: s = "3z4"
  Output: ["3z4","3Z4"]
 

Constraints:
  1 <= s.length <= 12
  s consists of lowercase English letters, uppercase English letters, and digits.
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [s.split("")];
  const queue = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) continue;

    queue.push(...res);

    while (queue.length) {
      const cur = [...queue.shift()];
      const curCode = cur[i].charCodeAt(0);
      const sign = curCode > 96 && curCode < 123 ? -1 : 1;

      cur[i] = String.fromCharCode(curCode + 32 * sign);
      res.push(cur);
    }
  }

  return res.map((item) => item.join(""));
};
