/*
     Задание:
     Сделайте так, чтобы при нажатии на клавишу G фон div#colorOutput становился зеленым.
     при нажатии на клавишу R фон div#colorOutput становился красным,
     а при нажатии на клавишу B фон div#colorOutput становился синим.
*/

let divElem = document.querySelector("#colorOutput");
// divElem.style.backgroundColor = "yellow";

document.addEventListener("keydown", function (e){
    if(e.code === "KeyG"){
        divElem.style.backgroundColor = "green";
    }
    else if(e.code === "KeyR"){
        divElem.style.backgroundColor = "red";
    }
    else if(e.code === "KeyB"){
        divElem.style.backgroundColor = "blue";
    }
    else{
        alert("Нажмите R или G или B");
    }
});
