/*
       Задание:
       Напишите сценарий, который свойства объекта user выведет в элементы на странице, которые помечены атрибутами data-bind.
       При этом значение атрибута это имя свойства, значение которого должно отобразится в элементе.
       Например, в <div data-bind="firstName"></div> должно отобразится значение свойства firstName объекта user
       Попробуйте написать универсальную функцию, которая сможет выводить любой объект с любыми свойствами в разметку в соответствующие элементы, помеченные атрибутом.
       Для обхода свойств объекта, можно использовать цикл for in
*/


// let user = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: "25",
// }

let car = {
    CarModel: "Porsh",
    Speed: "500",
    age: "10",
}

let divElements = document.querySelectorAll("[data-bind]");

function createContent(user) {
    for (const userKey in user) {
        for (const divElement of divElements) {
            if (divElement.dataset.bind === userKey) {
                divElement.innerHTML = user[userKey];
            }
        }
    }
}

createContent(car);