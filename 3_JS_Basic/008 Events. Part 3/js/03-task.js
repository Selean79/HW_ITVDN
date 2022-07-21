/*
     Задание:
     Перепишите сценарий таким образом, чтобы в коде устанавливался один обработчик для всех трех кнопок, при этом
     результат работы сценария не должен измениться.
     */
let buttons = document.querySelectorAll("button");

document.body.addEventListener("click", clickHandler);

function clickHandler(e) {
    buttons.forEach(element =>{
        if (e.target.innerText === element.innerText)
            alert(e.target.innerText);
    });
}