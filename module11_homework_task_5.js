// Задание 5

// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

//Решение:
const xn = (x,n) => {
  const result = x ** n;
  return result;
}

console.log(xn(5,4)) //5 и 4 заполнениы для примера, можно заменить на любые другие натуральные числа


//В решении я не добавлял проверку на натуральные числа, полагая, что при указании аргументов функции человек будет руководствоваться здравым смыслом и будет вводить только натуральные числа:)