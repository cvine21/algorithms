/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let opening = [];

	for (bracket of s) {
		if (bracket === "(" || bracket === "{" || bracket === "[") {
			opening.push(bracket);
		} else {
			let popped = opening.pop();
			if (
				(bracket === ")" && popped !== "(") ||
				(bracket === "}" && popped !== "{") ||
				(bracket === "]" && popped !== "[")
			) {
				return false;
			}
		}
	}
	return opening.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("{}")); // true
console.log(isValid("[]")); // true
console.log(isValid("()]")); // false
console.log(isValid("{}]")); // false
console.log(isValid("[])")); // false
console.log(isValid("((")); // false
console.log(isValid("}}")); // false
console.log(isValid("][")); // false
