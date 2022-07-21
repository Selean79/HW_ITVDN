/*
      Задание:
      Напишите сценарий, который вычисляет объем цилиндра по параметрам, которые вводит пользователь.
      Для расчета используйте формулу - V=π * r в квадрате * h
      Разместите на странице два поля ввода - первое для радиуса цилиндра, второе для высоты цилиндра.
      Объем цилиндра выведите в тело страницы.
*/
let divTag = document.createElement("div");
let pTagRadius = document.createElement("p");
let inputTagRadius = document.createElement("input");
let pTagHeight = document.createElement("p");
let inputTagHeight = document.createElement("input");
let btn = document.createElement("button");
let pTagResult = document.createElement("p");

divTag.style.border = "1px solid";
divTag.style.borderRadius = "17px";
divTag.style.padding = "20px";
divTag.style.width = "400px";
divTag.style.background = "#FFF3D3";
pTagRadius.innerHTML = "Радиус цилиндра: &nbsp;";
pTagHeight.textContent = "Высота цилиндра: ";
btn.textContent = "Вычислить объем цилинда";
pTagResult.style.fontWeight = "bold";

document.body.append(divTag);
divTag.append(pTagRadius);
divTag.append(pTagHeight);
divTag.append(btn);
pTagRadius.append(inputTagRadius);
pTagHeight.append(inputTagHeight);

btn.addEventListener("click", calculateVolume);

function calculateVolume() {
    let result = +(Math.pow((+inputTagRadius.value), 2) * Math.PI * +inputTagHeight.value).toFixed(2);
    if (isNaN(result)) {
        pTagResult.style.color = "red";
        pTagResult.textContent = "Введены некорректные данные!";
    }
    else {
        pTagResult.style.color = "unset";
        pTagResult.textContent = `Объем цилиндра: ${result}`;
    }
    divTag.append(pTagResult);
}

