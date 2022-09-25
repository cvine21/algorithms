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

/*
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	const a = "A".charCodeAt(0);
	const z = "Z".charCodeAt(0);
	const alphRange = z - a;

	let num = 0;
	for (let i = columnTitle.length - 1; i >= 0; --i) {
		num += Math.pow(columnTitle[i].charCodeAt(0) - a + 1, i + 1);
	}

	return num;
	// return columnTitle.split("").reduce((accum, cur, i) => {

	// 	return (accum +=
	// 		columnTitle.length === 1
	// 			? cur.charCodeAt(0) - a + 1
	// 			: i == 0
	// 			? Math.pow(cur.charCodeAt(0) - a + 1, 2)
	// 			: alphRange + (cur.charCodeAt(0) - a + 1));
	// }, 0);
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("Z")); // 26
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
