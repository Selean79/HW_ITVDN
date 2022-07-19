/*
 Задание:

 Доработайте сценарий.
 - При нажатии на кнопку стоп, анимация должна остановиться.
 - При нажатии на кнопку ускорить, анимация должна ускориться, при повторных нажатиях скорость анимации
   должна увеличиваться.
 - При нажатии на кнопку "Замедлить" - анимация замедляется, при повторных нажатиях скорость становится
   меньше.
 */

let element = document.querySelector("#element");
let elementWidth = parseInt(getComputedStyle(element).width);
let containerWidth = parseInt(getComputedStyle(document.querySelector("#container")).width);


let direction = "right";
let timerId;
let arrayId = [];

function moveLeft() {
    element.style.left = getLeft(element) - 3 + "px";
}

function moveRight() {
    element.style.left = getLeft(element) + 3 + "px";
}

function getLeft(e) {
    return parseInt(getComputedStyle(e).left);
}

function move() {
    if (getLeft(element) >= containerWidth - elementWidth) {
        direction = "left";
    }
    if (getLeft(element) <= 0) {
        direction = "right";
    }

    if (direction === "right") {
        moveRight();
    } else {
        moveLeft();
    }
}

document.querySelector("#startBtn").addEventListener("click", getStart);


function getStart(){
    if (!timerId || arrayId.length === 0) {
        timerId = setInterval(move, 40);
        arrayId.push(timerId);
    }
}

document.querySelector("#stopBtn").addEventListener("click", function () {
    if (timerId) {
        arrayId.forEach(element =>{
            clearInterval(element);
            element = null;
        })

        timerId = null;
        arrayId = [];
        console.log(arrayId);
    }
});

document.querySelector("#increaseBtn").addEventListener("click", function () {
    if (timerId) {
        timerId = setInterval(move, 50);
        arrayId.push(timerId);
        console.log(arrayId);
    } else {}
});


document.querySelector("#decreaseBtn").addEventListener("click", function () {
    if (timerId) {
        clearInterval(arrayId[arrayId.length - 1]);
        arrayId.pop();
        console.log(arrayId);
    }
});