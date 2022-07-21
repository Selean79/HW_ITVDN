/*
      Задание:
      Внесите изменения в сценарий. Сделайте чтобы при зажатой клавише Shift и нажатии стрелок на
      клавиатуре элемент по странице двигался в два раза быстрей, чем если просто нажимать на стрелки.
      */
let div = document.querySelector("#element");
let distance = 10;
let speedDistance = 150;

document.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowLeft":
            moveLeft(div, distance);
            break;
        case "ArrowRight":
            moveRight(div, distance);
            break;
        case "ArrowUp":
            moveUp(div, distance);
            break;
        case "ArrowDown":
            moveDown(div, distance);
            break;

    }

    switch (e.shiftKey && e.code){
        case "ArrowLeft":
            moveLeft(div, speedDistance);
            break;
        case "ArrowRight":
            moveRight(div, speedDistance);
            break;
        case "ArrowUp":
            moveUp(div, speedDistance);
            break;
        case "ArrowDown":
            moveDown(div, speedDistance);
            break;
    }
});

function moveUp(element, distance) {
    let top = getComputedStyle(element).top;
    element.style.top = parseInt(top) - distance + "px";
}

function moveDown(element, distance) {
    let top = getComputedStyle(element).top;
    element.style.top = parseInt(top) + distance + "px";
}

function moveLeft(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) - distance + "px";
}

function moveRight(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) + distance + "px";
}