// Задание 2

// Напишите функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит, простое число или нет. Если
// введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание
// на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

//Решение:

function showIsSimpleNumberOrNot(value) {
    let sum = 0;

    if (typeof value !== "number"){
        console.log("Введенное значение не является числом")
        return
    } else if (value > 1000) {
        console.log("Введенное число больше 1000")      
        return
    } else if (value < 2) {
        console.log("Введенное число меньше 2 и не может быть простым числом")      
        return
    } else for (let i = 2; i <= value; i = ++i) {
        if (value % i == 0) {
            sum = ++sum;
        }}
    if (sum == 1) {
        console.log("Введенное число простое")        
    } else console.log("Введенное число не является простым")       
}

showIsSimpleNumberOrNot(983) //Введите любое значение вместо 983 при необходимости
