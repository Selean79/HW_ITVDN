/*
      Задание:
      Поправьте сценарий таким образом, чтобы кроме изменения цвета div#color-sample в параграфе под div выводилось сообщение
      Цвет: #000000
      Где #000000 значение, цвета фона элемента div#color-sample
      */

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let colorSampleDiv = document.querySelector("#color-sample");
let color = colorSampleDiv.style.backgroundColor = getRandomColor();


let colorMessage = document.querySelector("p");
colorMessage.innerHTML = `Цвет: ${colo0r}`;