/*
424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.


Example 1:
	Input: s = "ABAB", k = 2
	Output: 4
	Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:
	Input: s = "AABABBA", k = 1
	Output: 4
	Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

Constraints:
	1 <= s.length <= 105
	s consists of only uppercase English letters.
	0 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let start = 0;
	let maxFreq = 0;
	let maxWindow = 0;
	const freqMap = {};

	for (let end = 0; end < s.length; end++) {
		if (freqMap[s[end]]) freqMap[s[end]]++;
		else freqMap[s[end]] = 1;

		maxFreq = Math.max(freqMap[s[end]], maxFreq);

		if (end + 1 - start - maxFreq > k) {
			freqMap[s[start]]--;
			start++;
		}

		maxWindow = end + 1 - start;
	}

	return maxWindow;
};
