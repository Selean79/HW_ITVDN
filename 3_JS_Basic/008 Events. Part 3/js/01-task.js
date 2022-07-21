/*
       Задание:
       Добавьте для кнопки два обработчика, один должен сработать в фазе capturing, второй - в фазе bubbling
*/

let btn = document.querySelector("button");

btn.addEventListener("click", handlerOnCapture, true);
btn.addEventListener("click", handlerOnBubble);

function handlerOnCapture(){
    alert("Событие в фазе погружения");
}

function handlerOnBubble(){
    alert("Событие в фазе всплытия");
}