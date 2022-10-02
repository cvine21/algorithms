/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:
	A -> 1
	B -> 2
	C -> 3
	...
	Z -> 26
	AA -> 27
	AB -> 28 
	...
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {
	const a = "A".charCodeAt(0);
	const z = "Z".charCodeAt(0);
	const alphRange = z - a;

	let colNum = 0;
	const len = columnTitle.length;

	for (let i = 0; i < len; ++i) {
		const curCharCode = columnTitle[i].charCodeAt(0) - a + 1;

		colNum += curCharCode * Math.pow(alphRange + 1, len - (i + 1));
	}

	return colNum;
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("Z")); // 26
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647
