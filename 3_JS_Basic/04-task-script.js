class CatalogItem {
    template;
    imagePath;

    constructor(image, tempalteSelector) {
        this.imagePath = image;
        this.template = document.querySelector(tempalteSelector).innerHTML;

    }

    renderIn(element) {
        let html = Mustache.render(this.template, this);
        element.innerHTML += html;
    }
}

class Product extends CatalogItem {
    price;

    constructor(imageaPath, price, selector = "#product") {
        super(imageaPath, selector);
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
    priceWithDiscount;

    constructor(imageaPath, price, discount) {
        super(imageaPath, price, "#productWithDiscount");
        this.discount = price * (discount / 100);
        this.priceWithDiscount = price - this.discount;
        console.log(this.priceWithDiscount);
    }
}

class Catalog {
    items = [];
    element;

    constructor(elementSelector) {
        this.element = document.querySelector(elementSelector);
    }

    add(item) {
        if (item.template != null) {
            this.items.push(item);
        }
        else {
            alert("Данный метод принимает только классы производные от CatalogItem");
            console.log(item);
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
catalog.add(new ProductWithDiscount("images/img4.jpg", 65.55, 20));
catalog.add(new Advertisement("images/banner2.jpg", "https://itvdn.comru/ru/specialities"));

catalog.show();