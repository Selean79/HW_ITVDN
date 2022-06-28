/*
      Задание:
      Напишите сценарий, который на основании значений во второй колонке таблицы #statsTable поменяет цвет строк таблицы (tr)
      Если во второй ячейке значение больше 100, строка должна отображаться зеленым цветом, если значение менее 100 - красным цветом.
      Для смены цвета строки используйте код row.style.backgroundColor = "цвет"
      */

let table = document.querySelector("#statsTable");

let row = table.rows;
let sum = 0;

for (let i = 0; i < row.length; i++){
    sum +=  Number(row[i].cells[1].textContent);

    if ( Number(row[i].cells[1].textContent) > 100){
        row[i].cells[1].style.background = "green";
    }
    else{
        row[i].cells[1].style.background = "red";
    }
}

row[row.length - 1].cells[1].textContent = sum;
row[row.length - 1].cells[1].style.backgroundColor = "yellow";
