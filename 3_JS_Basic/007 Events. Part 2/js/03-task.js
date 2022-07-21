/*
Задание:
Реализуйте сценарий, который при нажатии на клавиши 1, 2 или 3 на клавиатуре будет добавлять рамку
красного цвета на соответствующий div. Если зажаты клавиши Ctrl + A, то красная рамка добавляется сразу
для всех div
*/

let div = document.querySelectorAll("div");
console.log(div);

document.addEventListener("keydown", function (e){

    const borderColor =  "3px solid red";

   if (e.altKey && e.code === "KeyA"){
       for (const divElem of div) {
           divElem.style.border = borderColor;
       }
   }
   switch (e.code){
       case "Digit1":
       {
           div[0].style.border = borderColor;
           break;
       }
       case "Digit2":
       {
           div[1].style.border = borderColor;
           break;
       }
       case "Digit3":
       {
           div[2].style.border = borderColor;
           break;
       }
   };
});