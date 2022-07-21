/*
       Задание:
       Перепишите сценарий таким образом, чтобы в коде был только один обработчик на событие click (вместо четырех обработчиков).
       Результат работы сценария не должен измениться.
 */

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

document.body.addEventListener("click", clickHandler);

function clickHandler(e) {
        if (e.target.id === "add-btn") {
            alert(Number(input1.value) + Number(input2.value));
        } else if (e.target.id === "rem-btn") {
            alert(Number(input1.value) - Number(input2.value));
        } else if (e.target.id === "mul-btn"){
            alert(Number(input1.value) * Number(input2.value));
        }else if (e.target.id === "div-btn"){
            alert(Number(input1.value) / Number(input2.value));
        }
}

