/*
        Задание:
        Напишите сценарий, который удалит на странице элементы с атрибутом data-remove
*/

let divElement = document.querySelectorAll("[data-remove]");

for (const divElementItem of divElement) {
    divElementItem.remove();
}
