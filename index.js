"use strict";

// 1. Є массив [1,2,3,1,5,6,1,2,5], треба використовуючи цей масив створити новий, в якому будуть присутні тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні, то створюєте новий пустий масив.

const arr = [1, 2, 3, 1, 5, 6, 1, 2, 5];

const getUnique = arr.filter(function(number, index, numbers) {
  return (
    numbers.indexOf(number) !== numbers.lastIndexOf(number) &&
    numbers.indexOf(number) === index
  );
});
console.log(getUnique);
