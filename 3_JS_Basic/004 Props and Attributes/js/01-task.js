/*
    Задание:
    Напишите сценарий, который поменяет цвет текста элементов div, на тот, который указан в качестве значения атрибута data-color
    */

let divElement = document.querySelectorAll("div");

for (const divItem of divElement) {
    if (divItem.dataset.color === "red"){
        divItem.style.color = "red";
    }
    else if (divItem.dataset.color === "green"){
        divItem.style.color = "green";
    }
    else if (divItem.dataset.color === "blue"){
        divItem.style.color = "blue";
    }

}