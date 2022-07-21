/*
        Задание:
        Допишите сценарий, при нажатии на кнопку Generate, с помощью функции generateElement, должно создаваться 100 элементов и размещаться в
        элементе interactivePanel. При повторном нажатии на кнопку, содержимое interactivePanel должно удалятся, после чего создаваться новые 100 элементов.
        Все элементы с классом interactiveElement должны поддерживать перетаскивание мышью, при левом клике клавиши по элементу он должен перемещаться
        за курсором до момента отжатия клавиши мыши.
*/

let btnGenerate = document.querySelector("#generateButton")
let panelInteractive = document.querySelector("#interactivePanel");
let clickNumber = 1;
let move = false;
let offsetX, offsetY;
let currentDiv;

btnGenerate.addEventListener("click", generateItems);

function generateItems() {
    if (clickNumber % 2 !== 0) {
        for (let i = 0; i < 100; i++) {
            panelInteractive.append(generateElement());
        }
    }

    if(clickNumber % 2 === 0){
       let divElem = document.querySelectorAll(".interactiveElement");
       divElem.forEach(elem => {
           elem.remove();
       })
    }
    clickNumber++;
}

panelInteractive.addEventListener("mousedown", function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    currentDiv = e.target; // запоминаем div, который будет перемещаться
    panelInteractive.style.position = "fixed";

});

document.addEventListener("mousemove", function (e) {
    if (move) {
        currentDiv.style.top = e.clientY - offsetY + "px";
        currentDiv.style.left = e.clientX -  offsetX + "px";
    }
});

document.addEventListener("mouseup", function (e) {
    move = false;
});


// Создает и возвращает div с классом interactiveElement со случайной позицией в текущем окне
function generateElement() {
    let div = document.createElement("div");
    div.classList.add("interactiveElement");
    let maxLeft = window.innerWidth - 50; // ширина текущего документа
    let maxTop = window.innerHeight - 150; // высота текущего документа
    div.style.top = getRandomValue(maxTop) + "px";
    div.style.left = getRandomValue(maxLeft) + "px";
    div.style.backgroundColor = getRandomColor();
    return div;
}

// возвращает случайное значение цвета
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[getRandomValue(16)];
    }
    return color;
}

// возвращает случайное значение от 0 до max
function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}