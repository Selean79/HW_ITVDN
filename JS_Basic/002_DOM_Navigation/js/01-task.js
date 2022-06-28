/*
 Задание:
 Выведите значение переменной input в span, расположенный на странице
 */
let input = prompt("Введите сообщение");

let message = document.querySelector("span");

message.innerHTML = input;