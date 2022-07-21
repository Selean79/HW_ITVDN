/*
      Задание:
      Внесите правки в данный сценарий.
      Добавьте обработчик на клик по кнопке reset. При клике значения, введённые в поля ввода "Операнд 1"
      и "Операнд 2", должны быть заменены на значения 0
      Добавьте проверку перед выполнением любой арифметической операции. Если поле ввода пустое, сделайте
      для этого поля ввода красную рамку и сделайте видимый элемент с ошибкой под этим полем ввода.
      Для поля ввода input1 при отсутствии значения сделайте видимым span #input1Error для поля ввода
      input2 сделайте, в случае ошибки, #input2Error видимым.
      */
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let checkValue1 = true;
let checkValue2 = true;

console.log(input1.value + " - " + input2.value);

let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");
let resetBtn = document.querySelector("#reset-btn");

addBtn.addEventListener("click", function () {
    checkValues(input1.value, input2.value);

    if (checkValue1 && checkValue2) {
        alert(+input1.value + +input2.value);
    }

});

remBtn.addEventListener("click", function () {
    checkValues(input1.value, input2.value);
    if (checkValue1 && checkValue2) {
        alert(input1.value - input2.value);
    }
});

mulBtn.addEventListener("click", function () {
    checkValues(input1.value, input2.value);
    if (checkValue1 && checkValue2) {
        alert(input1.value * input2.value);
    }
});

divBtn.addEventListener("click", function () {
    checkValues(input1.value, input2.value);
    if (checkValue1 && checkValue2) {
        if (+input2.value === 0){
            alert("Делить на ноль нельзя!");
        }else {
            alert(input1.value / input2.value);
        }
    }
});

resetBtn.addEventListener("click", function () {
    input1.value = 0;
    input2.value = 0;
});

function checkValues(value1, value2) {
    if (value1 === "" || isNaN(value1)) {
        input1.style.border = "0.5px solid red";
        document.querySelector("#input1Error").classList.remove("error");
        checkValue1 = false;
    } else {
        document.querySelector("#input1Error").classList.add("error");
        input1.style.border = "0.5px solid";
        checkValue1 = true;
    }

    if (value2 === "" || isNaN(value2)) {
        input2.style.border = "0.5px solid red";
        document.querySelector("#input2Error").classList.remove("error");
        checkValue2 = false;
    } else {
        input2.style.border = "0.5px solid";
        document.querySelector("#input2Error").classList.add("error");
        checkValue2 = true;
    }
};