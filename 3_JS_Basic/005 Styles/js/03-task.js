/*
       Задание:
       Приложение создает для каждого дня недели div и поменяет какие дни недели являются занятыми.

       Создайте div под каждый элемент массива days, значения элементов массива должны быть добавлены как текст в div. Если текст созданного div находится в массиве
       busyDays добавьте для такого div дополнительно класс .busy-day
       Разместите все созданные в конец тела документа.
       */

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let busyDays = ["Monday", "Thursday", "Friday"];

days.forEach(day => {
    let divElement = document.createElement("div");
    divElement.innerHTML = day;

    busyDays.forEach(element => {
        if (element === divElement.textContent){
            divElement.classList.add("busy-day");
        }
    });
    document.body.append(divElement);
});




