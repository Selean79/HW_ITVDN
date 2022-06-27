/*
   Задание:
   Найдите на странице все параграфы с классом border и добавьте для них сплошную красную рамку толщиной в 1px
*/

let borderElement = document.querySelectorAll(".border");
for (const element of borderElement) {
    element.style.border = "1px solid red";
}