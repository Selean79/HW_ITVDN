/*
      Задание:
      Добавьте для кнопки testBtn обработчик на событие click.
      Обработчик должен выводить на экран сообщение Hello world.
      Добавьте обработчик тремя разными способами.
*/

function showMessage2() {
    alert("Hello World! -> 2-й вариант");
}

let btn = document.querySelector("testBtn");
btn = addEventListener("click", showMessage)

function showMessage() {
    alert("Hello World! -> 3-й вариант");
}

