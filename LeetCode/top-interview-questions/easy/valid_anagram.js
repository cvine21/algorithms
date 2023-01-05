/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
	Input: s = "anagram", t = "nagaram"
	Output: true

Example 2:
	Input: s = "rat", t = "car"
	Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hashMap = {};

  for (let c of s) {
    hashMap[c] = (hashMap?.[c] || 0) + 1;
  }

  for (let c of t) {
    if (!hashMap[c]) return false;
    hashMap[c]--;
  }

  return true;
};
