/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

/* Solution 1 */
function duplicateCount(text) {
	const arr = text.toLowerCase().split('');
	const duplicateChars = [];
	arr.forEach(char => {
		if (arr.indexOf(char) !== arr.lastIndexOf(char)
			&& duplicateChars.indexOf(char) === -1) {
			duplicateChars.push(char);
		}
	});
	return duplicateChars.length;
}

/* Solution 2 */
// function duplicateCount(text) {
// 	const duplicates = text.toLowerCase().split('').sort().join('').match(/([^])\1+/g);
// 	return duplicates ? duplicates.length : 0;
// }

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));