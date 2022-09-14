/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = "";

	for (let i = 0; strs.length; ++i) {
		for (let j = 0; j < strs.length; ++j) {
			if (i >= strs[j].length || strs[j][i] !== strs[0][i]) return prefix;
		}
		prefix += strs[0][i];
	}

	return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
