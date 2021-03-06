/*
      Задание:
      Напишите сценарий, который удалит строки таблицы, в которых во второй колонке находятся значения меньше 100.
      (В прошлом уроке были рассмотрены примеры, показывающие как получить доступ к родительским элементам, так как
      удалять нужно не ячейку td, в которой находится значение, а строку tr, в которой расположена эта ячейка).
*/

let score = document.querySelectorAll("td:nth-child(2)");

for (const scoreElement of score) {
    if (scoreElement.textContent < 100) {
        console.log(scoreElement.closest("tr").remove());
    }
}