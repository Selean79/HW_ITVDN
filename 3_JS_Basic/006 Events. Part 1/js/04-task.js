/*
      Задание:
      Перепишите сценарий. Сделайте так, чтобы сортировка элементов в #list происходила при нажатии
      на кнопку (кнопку нужно добавить), а не при загрузке страницы
*/
let btn = document.createElement("button");
btn.innerHTML = "Сортировать";
document.body.append(btn);

btn.addEventListener("click", sortArray);

function sortArray(){
    let list = document.querySelector("#list");
    let items = document.querySelectorAll("li"); // получаем объект NodeList (это не массив)
    let itemsArray = Array.from(items); // на основе NodeList создаем массив

// выполняем сортировку с помощью стандартного метода массива
// так как сортируются узлы DOM нужно определить критерии, по которым узлы будут сравниваться
// функция, указанная в параметре метода sort определяет логику сравнения двух элементов в массиве. Она должна возвращать значение:
// если a < b возвращать значение меньше 0
// если a > b возвращать значение больше 0
// если a == b возвращать 0

    itemsArray.sort(function (a, b) {
        if (a.textContent < b.textContent)
            return -1;
        if (a.textContent > b.textContent)
            return 1;
        return 0;
    });

// добавление элементов в алфавитном порядке
// так как элементы уже есть в DOM дереве, то при добавлении элемент удаляется со своей предыдущей позиции
    itemsArray.forEach(item => {
        list.append(item);
    });
}


