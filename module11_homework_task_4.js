// Задание 4

// Напишите функцию, которая принимает два числа. Каждую секунду
// необходимо выводить числа в интервале от первого до второго
// принятого числа. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль
// должно печататься число, начиная с 5
// и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

//Решение:
//Вариант 1:
// (https://developer.mozilla.org/ru/docs/Web/API/setInterval
// Примечание: JavaScript 1.8.5 introduces the Function.prototype.bind() method, which lets you specify the value that should be used as this for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called. Also, ES2015 supports arrow functions, with lexical this allowing us to write setInterval( () => this.myMethod) if we're inside myArray method.)

function showNumbersFromInterval(a, b) {
    let i = setInterval(() => {
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1000)
  }
  
showNumbersFromInterval(7, 17);



//Вариант 2:
function showNumbersFromInterval(a, b) {
    let number = a;
  
    let timerId = setInterval(function() {
      console.log(number);
      if (number == b) {
        clearInterval(timerId);
      }
      number++;
    }, 1000);
  }
  
  showNumbersFromInterval(2, 4);