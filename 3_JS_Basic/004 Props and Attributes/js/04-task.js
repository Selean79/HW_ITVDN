/*
       Задание:
       Для элементов с атрибутом data-status="expired" сделайте рамку красного цвета. Для элементов с атрибутом data-status="completed" выведите рамку зеленого цвета.
*/

let divAttStatus = document.querySelectorAll("[data-status]");


for (const attribElement of divAttStatus) {

    if (attribElement.dataset.status === "expired"){
        attribElement.style.border = "2px dotted red";
    }
    else if (attribElement.dataset.status === "completed"){
        attribElement.style.border = "2px dotted green";
    }

}