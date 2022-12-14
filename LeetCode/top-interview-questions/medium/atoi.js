/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.

Note:
	Only the space character ' ' is considered a whitespace character.
	Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let minSigned = -0x7fffffff - 1;
  let maxSigned = 0x7fffffff;
  let res = parseInt(s);

  if (isNaN(res)) return 0;
  if (res < minSigned) return minSigned;
  if (res > maxSigned) return maxSigned;
  return res;
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("   +42")); // 42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("")); // 0
console.log(myAtoi(" ")); // 0
console.log(myAtoi("only words")); // 0
console.log(myAtoi("91283472332")); // 2147483647
console.log(myAtoi("-2147483647")); // -2147483647
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("      -11919730356x")); // --2147483648
console.log(myAtoi("  -0012a42")); // -12
