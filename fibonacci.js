/*
Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => ''0 1 1 2"

fib(7) => ''0 1 1 2 3 5 8"

fib('7') => ''"

fib(1) => "0"

fib(0) => ''"
*/

function fib(num) {
    let seq = "";
    let prev = 0;
    let cur = 1;
	if (!Number.isInteger(num) || num <= 0)
		return seq;
    for (let i = 0; i < num; ++i) {
        seq = ((i + 1) !== num) ? seq.concat(`${prev} `) : seq.concat(`${prev}`);
        cur += prev;
        prev = cur - prev;
    }
    return seq;
}

console.log(fib(4.4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));