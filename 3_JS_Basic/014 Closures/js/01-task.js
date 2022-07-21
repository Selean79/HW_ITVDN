/*
Задание:
Перепишите следующий код так, чтобы он работал в любой среде выполнения (браузер, node.js и т.д.)
*/

if (!window.calc) {
    globalThis.calc = function (x, y) {
        alert(x + y);
    }
}

calc(10, 20);