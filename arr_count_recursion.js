/*
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

deepCount([1, 5, 3]) => 3

deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

deepCount([1, 2, [3, 4, [5]]]) => 7

deepCount([]) => 0

deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

/* 1-й вариант */
function deepCount(a) {
	let count = a.length;
	for (let i = 0; i < a.length; ++i) {
		if (Array.isArray(a[i]))
			count += deepCount(a[i]);
	}
	return count;
}

/* 2-й вариант */
// function deepCount(a) {
// 	return a.reduce((accum, cur) => accum + (Array.isArray(cur) ? deepCount(cur) : 0), a.length);
// }

console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));