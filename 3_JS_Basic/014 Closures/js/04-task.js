/*
Задание:
Используя IIFE избавьтесь от глобальных идентификаторов в коде.
Убедитесь в том, что глобальных идентификаторов нет, выполнив код после 25 строки
*/

(function testFunc() {
var exampleName1 = "Test1";
let exampleName2 = "Test2";

    console.log("This is test function");
})();

// код для проверки глобальных идентификаторов, выполните за пределами IIFE
// если глобальных переменных нет - будет возвращено значение undefind
// если функция testFunc не глобальная - будет ошибка на этапе выполнения
console.log(globalThis.exampleName1);
console.log(globalThis.exampleName2);
console.log(exampleName2);

globalThis.testFunc();
testFunc();