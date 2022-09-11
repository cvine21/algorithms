/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

function zero(callback) {
	if (callback)
		return callback(0);
	return 0;
}
function one(callback) {
	if (callback)
		return callback(1);
	return 1;
}
function two(callback) {
	if (callback)
		return callback(2);
	return 2;
}
function three(callback) {
	if (callback)
		return callback(3);
	return 3;
}
function four(callback) {
	if (callback)
		return callback(4);
	return 4;
}
function five(callback) {
	if (callback)
		return callback(5);
	return 5;
}
function six(callback) {
	if (callback)
		return callback(6);
	return 6;
}
function seven(callback) {
	if (callback)
		return callback(7);
	return 7;
}
function eight(callback) {
	if (callback)
		return callback(8);
	return 8;
}
function nine(callback) {
	if (callback)
		return callback(9);
	return 9;
}

function plus(right) {
	return (left) => Math.floor(left + right);
}
function minus(right) {
	return (left) => Math.floor(left - right);
}
function times(right) {
	return (left) => Math.floor(left * right);
}
function dividedBy(right) {
	return (left) => Math.floor(left / right);
}

console.log(seven(times(five())) === 35);
console.log(four(plus(nine())) === 13);
console.log(eight(minus(three())) === 5);
console.log(six(dividedBy(two())) === 3);
console.log(four(dividedBy(seven())));
