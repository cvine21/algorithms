/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


Example 1:
	Input: s = "abccccdd"
	Output: 7
	Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:
	Input: s = "a"
	Output: 1
	Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
	1 <= s.length <= 2000
	s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let sorted = [...s].sort();
	let longest = 0;
	let len = s.length;

	for (let i = 0; i < len; ++i) {
		if (i + 1 !== len && sorted[i + 1] === sorted[i]) {
			longest += 2;
			++i;
		} else if (longest % 2 === 0) {
			++longest;
		}
	}

	return longest;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("abb")); // 3
console.log(longestPalindrome("aab")); // 3
console.log(longestPalindrome("aba")); // 3
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("")); // 0
