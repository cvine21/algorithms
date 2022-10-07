/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


Example 1:
	Input: s = "egg", t = "add"
	Output: true
Example 2:
	Input: s = "foo", t = "bar"
	Output: false
Example 3:
	Input: s = "paper", t = "title"
	Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	const sMapT = {};
	const tMapS = {};

	if (s.length !== t.length) return false;

	for (const i in s) {
		if (!(s[i] in sMapT) && !(t[i] in tMapS)) {
			sMapT[s[i]] = t[i];
			tMapS[t[i]] = s[i];
		} else if (sMapT[s[i]] !== t[i] || tMapS[t[i]] !== s[i]) return false;
	}

	return true;
};
