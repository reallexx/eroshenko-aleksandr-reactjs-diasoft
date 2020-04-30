# About

Модуль 5. ReactJS. Настройка окружения

# Description

promiseReduce — работа с асинхронными функциями

Цель: Написать функцию: promiseReduce(asyncFunctions, reduce, initialValue)

asyncFunctions — массив асинхронных функций, возвращающих Promise.

reduce(memo, value) — функция, которая будет вызвана для каждого успешно завершившегося промиса.

initialValue — стартовое значение для функции reduce.

promiseReduce последовательно вызывает переданные асинхронные функции и выполняет reduce-функцию сразу при получении результата до вызова следующей асинхронной функции.

Функция promiseReduce должна возвращать Promise с конечным результатом.
Пример использования



```javascript<br>
var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}
 
var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})
 
function promiseReduce(asyncFunctions, reduce, initialValue) {
/*
* Реализация
*/
}
 
// Тест кейс
promiseReduce(
   [fn1, fn2],
   function (memo, value) {
      console.log('reduce');
      return memo * value
   },
   1
)
.then(console.log)
 
//Вывод в консоль
//```
//fn1
//reduce
//fn2
//reduce
//2
//```
```

# How to

Реализована функция promiseReduce.<br>
Для проверки используется jest.<br>

Для запуска тестов сначала выполнить nmp i. После установки пакетов выполнить npm run test.

# Notes

Название модуля и содержание в части React и TS никак не соотносятся с заданием. По сути тут продолжение курса по JS.
