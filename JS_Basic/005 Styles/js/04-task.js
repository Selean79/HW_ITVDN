/*
      Задание:
      Напишите сценарий, который добавит класс attention строкам таблицы, в которых во второй колонке находятся значения меньше 100.
*/

let tdElements = document.querySelectorAll("td:nth-child(2)");

tdElements.forEach(element =>{
    if (element.textContent < 100){
        element.classList.add("attention");
    }
})