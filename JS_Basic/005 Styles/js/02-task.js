/*
        Задание:
        Не используя CSS классы, поменяйте с помощью JavaScript кода оформление элемента DIV, расположенного на текущей странице.

        Добавьте:
        >> шрифт - 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        >> сплошную рамку толщиной в 1 px красного цвета
        >> внутренний отступ в 16px
        >> скругление рамки в 8 px
*/

let divElement = document.querySelector("div");

divElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
divElement.style.border = "1px solid red";
divElement.style.padding = "16px";
divElement.style.borderRadius = "8px";