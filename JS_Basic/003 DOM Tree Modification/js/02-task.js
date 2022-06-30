/*
      Задание:
      Используя параграфы, выведите все рабочие дни недели в div, который находится после фразы "Рабочие дни",
      выведите все выходные дни недели после фразы "Выходные дни".
      Можно внести в разметку соответствующие изменения, чтобы упростить задачу поиска необходимых div.
      Параграфы создавайте с помощью перебора массива days. В параграф помещайте значение свойства name.
      */

let days = [
    {name: "Sunday", isWorkDay: false},
    {name: "Monday", isWorkDay: true},
    {name: "Tuesday", isWorkDay: true},
    {name: "Wednesday", isWorkDay: true},
    {name: "Thursday", isWorkDay: true},
    {name: "Friday", isWorkDay: true},
    {name: "Saturday", isWorkDay: false}
];

let divWorkDay = document.querySelector("#works-days");
let divWeekend = document.querySelector("#weekend");

days.forEach(dayElement => {
    if(dayElement.isWorkDay){
       creatWorkDayList(dayElement.name);
   }
    else {
        creatWeekendList(dayElement.name);
    }
});

function  creatWorkDayList(dayItem){
    let pElement = document.createElement("p");
    pElement.textContent = dayItem;
    divWorkDay.append(pElement);
};

function  creatWeekendList(dayItem){
    let pElement = document.createElement("p");
    pElement.textContent = dayItem;
    divWeekend.append(pElement);
};

