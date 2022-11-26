/*
567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.


Example 1:
	Input: s1 = "ab", s2 = "eidbaooo"
	Output: true
	Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
	Input: s1 = "ab", s2 = "eidboaoo"
	Output: false


Constraints:
	1 <= s1.length, s2.length <= 104
	s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	const s1map = new Array(26).fill(0);
	const s2map = new Array(26).fill(0);
	const a = "a".charCodeAt(0);

	for (let i = 0; i < s1.length; i++) {
		s1map[s1[i].charCodeAt(0) - a]++;
		s2map[s2[i].charCodeAt(0) - a]++;
	}

	const matches = (s1map, s2map) => {
		for (let i = 0; i < 26; i++) {
			if (s1map[i] != s2map[i]) return false;
		}
		return true;
	};

	for (let i = 0; i < s2.length - s1.length; i++) {
		if (matches(s1map, s2map)) return true;

		s2map[s2.charAt(i + s1.length).charCodeAt(0) - a]++;
		s2map[s2[i].charCodeAt(0) - a]--;
	}

	return matches(s1map, s2map);
};
