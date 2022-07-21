/*
Задание:
getRandomColor функция, которая возвращает случайно сгенерированный цвет в фомрмате #001122
Используя функцию getRandomColor добавьте для каждого параграфа рамку случайного цвета
*/
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// let colorBorder = document.getElementsByTagName("p");
let colorBorder = document.querySelectorAll("p");
for (let colorBorderElement of colorBorder) {
    colorBorderElement.style.border = `2px solid ${getRandomColor()}`;
}