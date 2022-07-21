function createProductd(name, price) {
    return {
        name,
        price,
        ordered: 0,
    }
}

//
// let products = [
//     {
//         name: "Бумага офисная А4, 80 г/м2, 500 л",
//         price: 280.25,
//         ordered: 0
//     },
//     {
//         name: "Биндеры для бумаги 51 мм",
//         price: 56,
//         ordered: 0
//     },
//     {
//         name: "Ручка шариковая синяя",
//         price: 12.5,
//         ordered: 0
//     }
// ];

let products = [
    createProductd("Бумага офисная А4, 80 г/м2, 500 л", 280.25),
    createProductd("Биндеры для бумаги 51 мм", 56),
    createProductd("Ручка шариковая синяя", 12.5),
];

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
    const name = products[index].name;
    const price = products[index].price;

    products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
}

// цикл для расчета общей цены купленных продуктов
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].price * products[index].ordered;
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) // иногда в усолвии используется только одна переменная.
{
    alert("Доставка будет бесплатной.");
}