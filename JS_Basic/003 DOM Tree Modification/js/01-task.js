/*
   Задание:
   Создайте параграфы под каждый элемент массива days, значения элементов массива должны быть добавлены как текст в параграфе.
   Разместите все созданные параграфы в div с id output
   */
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let divElement = document.querySelector("#output");

days.forEach(element => {
    let pElement = document.createElement("p");
    pElement.textContent = element;
    divElement.append(pElement);
})
