/*
Задание:
По аналогии со ссылками size-16, size-24, size-32, которые используют замыкание, добавьте обработчики
на клик по ссылке red, green, blue. При клике по ссылкам должен измениться цвет параграфа на красный, зеленый или синий.
Используйте замыкание в обработчиках.
*/
function makeSizer(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    };
}

function makeBGColor(color){
    return function (){
        let p =document.querySelector("p");
        p.style.backgroundColor = color;
    };
}

let size16 = makeSizer(16);
let size24 = makeSizer(24);
let size32 = makeSizer(43);

let bgRed = makeBGColor("red");
let bgGreen = makeBGColor("green");
let bgBlue = makeBGColor("blue");

document.querySelector("#size-16").onclick = size16;
document.querySelector("#size-24").onclick = size24;
document.querySelector("#size-32").onclick = size32;

document.querySelector("#red").onclick = bgRed;
document.querySelector("#green").onclick = bgGreen;
document.querySelector("#blue").onclick = bgBlue;
