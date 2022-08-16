/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
*/

function permutations(string) {
	// let res = [];
	// for (let i = 0; i < string.length; ++i) {

	// 	res.push
	// }
	// return [];
	return string.replace(string[0], string[1]);
}

// abcd bacd bcad bcda acbd acdb abdc
console.log(permutations('abcd'));