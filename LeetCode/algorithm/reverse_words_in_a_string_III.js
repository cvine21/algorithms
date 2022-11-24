/*
557. Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


Example 1:
	Input: s = "Let's take LeetCode contest"
	Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:
	Input: s = "God Ding"
	Output: "doG gniD"


Constraints:
	1 <= s.length <= 5 * 104
	s contains printable ASCII characters.
	s does not contain any leading or trailing spaces.
	There is at least one word in s.
	All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let lastSpaceIndex = -1;
	let arr = [...s];

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === " " || i === arr.length) {
			let start = lastSpaceIndex + 1;
			let end = i - 1;

			while (start < end) {
				let tmp = arr[start];
				arr[start] = arr[end];
				arr[end] = tmp;
				start++;
				end--;
			}
			lastSpaceIndex = i;
		}
	}

	return arr.join("");
};
