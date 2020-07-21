const products = [];

module.exports = class Product {
    constructor(title, image, price, description) {
        this.title = title;
        this.image = image;
        this.price = price;
        this.description = description;
    }
    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }
}