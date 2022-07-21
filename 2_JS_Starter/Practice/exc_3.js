let questions = [
    {
        id: 1,
        question: "Какой язык не является строго типизированным?",
        a: "C++",
        b: "C#",
        c: "JavaScript",
        d: "Java",
        winnerAnswer: "c",
        costQuestion: 500,
    },
    {
        id: 2,
        question: "HTML это?",
        a: "Язык программирования",
        b: "Язык разметки",
        c: "Иностранный язык",
        d: "Неизвестный язык",
        winnerAnswer: "b",
        costQuestion: 1000,
    },
    {
        id: 3,
        question: "С помощью какого оператора можно удалить элемент из массива?",
        a: "unshift",
        b: "delete",
        c: "shift",
        d: "index",
        winnerAnswer: "b",
        costQuestion: 2000,
    },
    {
        id: 4,
        question: "С помощью какого тега вы можете подключить js скрипт?",
        a: "<br>",
        b: "<html>",
        c: "<script>",
        d: "<body>",
        winnerAnswer: "c",
        costQuestion: 3000,
    },
    {
        id: 5,
        question: "Где хранится примитивное значение?",
        a: "в чемодане",
        b: "в куче",
        c: "в стеке",
        d: "у соседа",
        winnerAnswer: "c",
        costQuestion: 5000,
    },

    {
        id: 6,
        question: "Какое стихийное бедствие измеряется по шкале Рихтера?",
        a: "Торнадо",
        b: "Землетрясения",
        c: "Наводнения",
        d: "Ураган",
        winnerAnswer: "b",
        costQuestion: 8000,
    },
    {
        id: 7,
        question: "Какая планета находится ближе всего к Солнцу?",
        a: "Земля",
        b: "Марс",
        c: "Меркурий",
        d: "Венера",
        winnerAnswer: "c",
        costQuestion: 10000,
    },
    {
        id: 8,
        question: "Из какого вещества состоят ногти?",
        a: "Серотонин",
        b: "Эпидермис",
        c: "Меланин",
        d: "Кератин",
        winnerAnswer: "d",
        costQuestion: 13000,
    },
    {
        id: 9,
        question: "Что означает термин ДНК?",
        a: "Дезоксирибонуклеарная кислота",
        b: "Дуорибонуклеиновая кислота",
        c: "Дуоксирибонуклеиновая кислота",
        d: "Дезоксирибонуклеиновая кислота",
        winnerAnswer: "d",
        costQuestion: 15000,
    },
    {
        id: 10,
        question: "Символом какого ресторана является клоун?",
        a: "Макдональдс",
        b: "Бургер Кинг",
        c: "KFC",
        d: "Маленькие Цезари",
        winnerAnswer: "a",
        costQuestion: 25000,
    },
    {
        id: 11,
        question: "Какая страна является самой маленькой в мире?",
        a: "Мальта",
        b: "Мальдивы",
        c: "Ватикан",
        d: "Монако",
        winnerAnswer: "c",
        costQuestion: 50000,
    },
    {
        id: 12,
        question: "Каково было первоначальное название Нью-Йорка?",
        a: "Новый Амстердам",
        b: "Большое яблоко",
        c: "Имперский штат",
        d: "Готэм",
        winnerAnswer: "a",
        costQuestion: 100000,
    },
    {
        id: 13,
        question: "Когда пала Берлинская стена?",
        a: "1988",
        b: "1989",
        c: "1990",
        d: "1991",
        winnerAnswer: "b",
        costQuestion: 250000,
    },
    {
        id: 14,
        question: "Сколько было пилотируемых высадок на Луну?",
        a: "Восемь",
        b: "Пять",
        c: "Шесть",
        d: "Семь",
        winnerAnswer: "c",
        costQuestion: 500000,
    },
    {
        id: 15,
        question: "В каком году была подписана Декларация независимости США?",
        a: "1676",
        b: "1678",
        c: "1775",
        d: "1776",
        winnerAnswer: "d",
        costQuestion: 1000000,
    },
];

let sumWin = 0;
let lastQuestion = true;
let guaranteedSum = 0;
let amountQuestions = 15;


function showQuestionAndAnswers(indexQuestion) {
    return questions
        .filter((element) => element.id === indexQuestion + 1)
        .map(element => {
            return `Вопрос № ${element.id}:\n${element.question}\n\na)   ${element.a}\nb)   ${element.b}\nc)   ${element.c}\nd)   ${element.d}`;
        });
}

function getWinner(indexQuestion) {
    return questions
        .filter((element) => element.id === indexQuestion + 1)
        .map(element => {
            return element.winnerAnswer;
        });
}

function getCostQuestion(indexQuestion) {
    let cost = questions
        .filter((element) => element.id === indexQuestion + 1)
        .map(element => {
            return element.costQuestion;
        });
    return cost[0];
}

function checkSum(index) {
    if (index >= 4 && index < 9) {
        return 5000;
    }
    if (index >= 9 && index < 14) {
        return 250000;
    }
    if (index === 14) {
        return 1000000;
    }
    return 0;
}

let handleAnswer = function (index, answer, lastQuestion) {
    guaranteedSum = checkSum(index);
    if (answer === null) {
        alert(`Вы не ответили на вопрос!\nВаш выигрыш ${guaranteedSum}`);
    } else {
        answer = answer.toLowerCase().trim();
        if (answer === getWinner(index).toString()) {
            sumWin += getCostQuestion(index);
            if (lastQuestion) {
                if (confirm(`Продолжаем играть?\n\nВаша сумма: ${sumWin}\nНесгораемая сумма: ${guaranteedSum}`)) {
                    return true;
                } else {
                    alert(`Ваш выигрыш ${guaranteedSum}`);
                }
            } else {
                alert(`Поздравляю, вы выиграли ${guaranteedSum}!!!`);
            }
        } else {
            alert(`Вы ответили неправильно!\nВаш выигрыш ${guaranteedSum}`);
        }
    }
};

alert("Игра \"Как стать миллионером\"");
for (let i = 0; i < amountQuestions; i++) {
    if (i === (amountQuestions - 1)) {
        lastQuestion = false;
    }
    let memberAnswer = prompt(`${showQuestionAndAnswers(i)}`);
    if (!handleAnswer(i, memberAnswer, lastQuestion)) {
        break;
    }
}