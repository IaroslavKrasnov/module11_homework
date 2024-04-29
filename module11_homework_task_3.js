// Задание 3

// Напишите функцию, которая принимает число как аргумент и возвращает
// функцию, которая также принимает число как аргумент и возвращает сумму
// этих двух чисел. Выведите в консоль результат.

//Себе в помощь на будущее: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

//Решение:

function getSum(number1) {
    return function (number2) {
        return number1 + number2;
    }
}

console.log(getSum(5)(18));