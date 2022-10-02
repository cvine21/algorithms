/*
Given a string s, find the length of the longest substring without repeating characters.


Example 1:
	Input: s = "abcabcbb"
	Output: 3
	Explanation: The answer is "abc", with the length of 3.

Example 2:
	Input: s = "bbbbb"
	Output: 1
	Explanation: The answer is "b", with the length of 1.

Example 3:
	Input: s = "pwwkew"
	Output: 3
	Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let current = 0;
    let nonRep = [];

    for (let i = 0; i < s.length; ++i) {
        if (!nonRep.includes(s[i])) {
			nonRep.push(s[i]);
			if (max === 0) ++max;
            ++current;
        } else  {
			nonRep.splice(0, nonRep.indexOf(s[i]) + 1);
			nonRep.push(s[i]);
			
            if (current > max) max = current;
            current = nonRep.length;
        }
    }

    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("")); // 0