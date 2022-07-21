/*
        Задание:
        Добавьте строку "Итого" для таблицы statsTable. Напишите сценарий, которым выведите во вторую ячейку этой строки сумму всех числовых значений второй колонки.
        Выведите в третью ячейку этой строки сумму всех числовых значений из третьей колонки таблицы.
        В div с id result выведите сообщение "Отдел 1 сделал больше продаж" или "Отдел 2 сделал больше продаж" на основе раннее вычисленных значений в строке "Итого".
        Используйте любые методы, которые были рассмотрены на в прошлых уроках.
*/

let table = document.querySelector("#statsTable");
let result = document.querySelector("#result");
let rows = table.rows;

let sumDepartment1 = 0;
let sumDepartment2 = 0;

for (let i = 1; i < rows.length-1; i++){
  sumDepartment1 += Number(rows[i].cells[1].textContent);
}
for (let i = 1; i < rows.length-1; i++){
  sumDepartment2 += Number(rows[i].cells[2].textContent);
}

rows[rows.length-1].cells[1].innerHTML = `<b>${sumDepartment1}</b>`;
rows[rows.length-1].cells[1].style.color = "red";
rows[rows.length-1].cells[2].innerHTML = `<b>${sumDepartment2}</b>`;
rows[rows.length-1].cells[2].style.color = "red";

result.innerHTML = sumDepartment1 > sumDepartment2 ? "<p>Отдел 1 сделал больше продаж</p>" : "<p>Отдел 2 сделал больше продаж</p>";



