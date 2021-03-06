/*
Задание:
Напишите сценарии "Игра 'Угадай число'". Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
Каждый раз, когда игрок пытается угадать число, сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
При завершении игры выведите пользователю информацию о том, с какой попытки угадано значение и сколько было потрачено на это времени.

Для генерации случайного числа используйте следующий код:
let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue

Пример игры:
Сценарий: я загадал случайное значение от 0 до 100
Пользователь: 50
Сценарий: я загадал значение больше, чем 50
Пользователь: 75
Сценарий: я загадал значение меньше, чем 75
Пользователь: 62
Сценарий: я загадал значение меньше, чем 62
Пользователь: 56
Сценарий: Правильно! Загаданное значение 56. Вы угадали с 4й попытки за 10 сек.
*/

let btn = document.querySelector("button").addEventListener("click", handler);
let timerId = null;
let win = false;
let sec = 0;
let attempt = 0;

let randomValue = Math.floor(Math.random() * 101);

function handler() {
    let answer = +prompt("Я загадал случайное значение от 0 до 100. Попробуй отгадать! ;)");


    if (!answer) {
        alert("Ок, поиграем в cледующий раз.");
    } else {
        while (!win) {
            timerId = setInterval(() => console.log(sec++), 1000);
            attempt++;
            if (answer < randomValue) {
                answer = +prompt(`Я загадал значение больше, чем ${answer}  `);
            }
            if (answer > randomValue) {
                answer = +prompt(`Я загадал значение меньше, чем ${answer}  `);
            }
            if(answer === randomValue){
                clearInterval(timerId);
                alert(`Ура, ты отгадал число ${randomValue} c ${attempt} попытки за ${sec} сек`);
                win = true;
            }
        }
    }
}