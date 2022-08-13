
/*
Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
*/
const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) !== "string") return "Ошибка!";
	return str.split('').reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}

console.log(reverse("This is some strange string"));