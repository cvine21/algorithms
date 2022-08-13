function factorial(n) {
	if (!Number.isInteger(n) || n < 0) return "Invalid argument";
	if (n === 0) return 1;
	return n * factorial(n - 1);
}