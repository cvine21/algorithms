/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

function permutations(string) {
	let result = [];
	let current;
	let remainingChars;

	if (string.length === 1)
		return [string];

	for (let i = 0; i < string.length; ++i) {
		current = string[i];
		remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
		for (let permutation of permutations(remainingChars)) {
			result.push(current + permutation);
		}
	}
	return (Array.from(new Set(result)));
}

console.log((permutations('a')));