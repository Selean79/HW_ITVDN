/*
     Задание:
     Посчитайте сумму значений атрибутов data-value и my-attribute всех элементов на текущей странице и отобразите ее пользователю.
*/

let divElement = document.querySelector("div");
let divAttribute1 = document.querySelectorAll("[data-value]");
let divAttribute2 = document.querySelectorAll("[my-attribute]");
let sumDataValue = 0;
let sumMyAttribute = 0;

sumDataValue += +divElement.dataset.value;

for (const attributeElement of divAttribute1) {
 sumDataValue += +attributeElement.dataset.value;   
}

for (const attributeElement of divAttribute2) {
    sumMyAttribute += +attributeElement.getAttribute("my-attribute");
 }
console.log(sumDataValue);
console.log(sumMyAttribute);

alert (`Сумма значений атрибута data-value: ${sumDataValue}\nСумма значений атрибута my-attribute: ${sumMyAttribute}`);