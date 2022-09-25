/* 
Find trailing zeros in factorial of the number given as an argument

Good explanation:
https://www.purplemath.com/modules/factzero.htm

The idea of the task is to divide the number until it becomes lower than 0.
So we can find the number of trailing zeros in factorial of the number;
*/

function zeros(n) {
	let countOfZeros = 0;
	while (n > 0) {
		n = Math.floor(n / 5);
		countOfZeros += n;
	}
	return countOfZeros;
}

console.log(zeros(0) === 0, "Testing with n = 0");
console.log(zeros(5) === 1, "Testing with n = 5");
console.log(zeros(6) === 1, "Testing with n = 6");
console.log(zeros(30) === 7, "Testing with n = 30");
console.log(zeros(15), "Testing with n = 15");
