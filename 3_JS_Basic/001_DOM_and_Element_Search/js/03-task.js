/* 
 Задание:
 Найдите на странице все элементы li, которые находятся в ul с классом border 
 и добавьте для них сплошную красную рамку толщиной в 1px
 */

let liElements = document.querySelectorAll(".border li");
for (let liElement of liElements) {
    liElement.style.border = "1px solid red";
}