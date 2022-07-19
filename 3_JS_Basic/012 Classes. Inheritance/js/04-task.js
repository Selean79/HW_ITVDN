/*
Задание:
Внесите следующие правки в код:
1)  Сделайте так, чтобы в Catalog, в метод add можно было добавлять только объекты, которые наследовались от класса CatalogItem
    Если вызывая метод add передается другой объект, через alert выводите сообщение "Данный метод принимает только классы производные от CatalogItem"
2)  Добавьте класс ProductWithDiscount - задача класса выводить продукт со скидкой, которая была указана в конструкторе
    Наследуйте класс от класса Product
    Добавьте для класса конструктор, через который будет добавятся скидка на продукт.
    Сделайте так, чтобы класс самостоятельно вычислял цену продукта с учетом указанной скидки и выводил на экране базовую цену и акционную цену (Можно вывести базовую цену перечеркнутой).
    Замените код catalog.add(new Product("images/img4.jpg", 65.55)); на catalog.add(new ProductWithDiscount("images/img4.jpg", 65.55, 20));, третий параметр 20 - скидка 20%
    Убедитесь, что в каталоге последний продукт выводится со скидкой 20%
*/
class CatalogItem {
    template;
    imagePath;

    constructor(image, tempalteSelector) {
        this.imagePath = image;
        this.template = document.querySelector(tempalteSelector).innerHTML;
    }

    renderIn(item) {

        if (this.discount === undefined){
            this.discount = "";
        }
        else{
            this.discount = `Скидка: ${this.discount}%`;
        }

        if (this.discountPrice === undefined){
            this.discountPrice = "";

        }
        else{
            this.discountPrice = `Цена со скидкой: ${this.discountPrice}$`;
        }

        

        let html = Mustache.render(this.template, this);
        item.innerHTML += html;
    }
}

class Product extends CatalogItem {
    price;

    constructor(imageaPath, price) {
        super(imageaPath, "#product");
        this.price = price;
    }
}

class Advertisement extends CatalogItem {
    url;

    constructor(imagePath, url) {
        super(imagePath, "#advertisement");
        this.url = url;
    }
}

class ProductWithDiscount extends Product {
    discount;
    discountPrice;

    constructor(imagePath, price, discount) {
        super(imagePath, price);
        this.discount = discount;
        this.discountPrice = (this.price - (this.price * this.discount / 100)).toFixed(2);
    }

}

class Catalog {
    items = [];
    element;

    constructor(elementSelector) {
        this.element = document.querySelector(elementSelector);
    }

    add(item) {
        if (item instanceof CatalogItem || item instanceof CatalogItem) {
            this.items.push(item);
        } else {
            alert("Данный метод принимает только классы производные от CatalogItem");
        }
    }

    show() {
        this.items.forEach(item => {
            item.renderIn(this.element);
        });
    }
}

let catalog = new Catalog("#catalog");

catalog.add(new Product("images/img1.jpg", 35.55));
catalog.add(new Product("images/img2.jpg", 25.25));
catalog.add(new Advertisement("images/banner1.jpg", "https://itvdn.com/ru/catalog"));
catalog.add(new Product("images/img3.jpg", 14.55));
catalog.add(new ProductWithDiscount("images/img4.jpg", 65.55, 50));
catalog.add(new Advertisement("images/banner2.jpg", "https://itvdn.comru/ru/specialities"));


catalog.show();



