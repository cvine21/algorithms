/*
5. Longest Palindromic Substring

Given a string s, return the longest 
palindromic substring in s.


Example 1:
	Input: s = "babad"
	Output: "bab"
	Explanation: "aba" is also a valid answer.
Example 2:
	Input: s = "cbbd"
	Output: "bb"


Constraints:
	1 <= s.length <= 1000
	s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
	let longest = "";
	let len = 0;

	const defineLongestPalindrome = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			if (right - left + 1 > len) {
				longest = s.slice(left, right + 1);
				len = right - left + 1;
			}
			right++;
			left--;
		}
	};

	for (let i = 0; i < s.length; i++) {
		defineLongestPalindrome(i, i);
		defineLongestPalindrome(i, i + 1);
	}

	return longest;
};
