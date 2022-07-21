/*
   Задание:
   Создайте таблицу (table, tr, td) на основе массива объектов с именем source. Каждый объект - отдельная строка таблицы. Свойство month - значение для первой колонок.
   Свойство amont - значение для второй колонки.
   */

let source = [
    {
        month: "Январь",
        amount: 20
    },
    {
        month: "Февраль",
        amount: 140
    },
    {
        month: "Март",
        amount: 115
    },
    {
        month: "Апрель",
        amount: 100
    },
    {
        month: "Март",
        amount: 80
    },
    {
        month: "Июнь",
        amount: 90
    },
    {
        month: "Июль",
        amount: 100
    }
];

let table = document.createElement("table");
document.body.append(table);
source.forEach(element => {
    table.insertAdjacentHTML("beforeend", `<tr><td>${element.month}</td><td>${element.amount}</td></tr>`);
})
