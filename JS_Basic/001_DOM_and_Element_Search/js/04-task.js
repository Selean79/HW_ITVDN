/* 
 Задание:
 Для первого и последнего элемента li для всех ul на данной странице
 добавьте сплошную красную рамку толщиной в 1px
 */

liElements = document.querySelectorAll("li:first-child, li:last-child");

for (let element of liElements) {
element.style.border = "1px solid red";
}