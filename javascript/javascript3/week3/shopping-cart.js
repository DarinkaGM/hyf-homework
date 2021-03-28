const productList = document.getElementById("products");
const price = document.getElementById("price");
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const total = document.getElementById("total");
const username = document.getElementById ("user")
class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const newProducts = this.products.filter((existingProduct) => {
            return existingProduct.name !== product.name
        })
        this.products = newProducts;
    }
    searchProduct(productName) {
        const searchedProduct = this.products.filter(product => product.name.toLowerCase() === productName.toLowerCase());
        return searchedProduct;
    }
    renderProducts() {
        this.products.forEach((product) => {
            const li = document.createElement('li');
            const liPrice = document.createElement("li");
            li.textContent = `${product.name}`;
            liPrice.textContent = `${product.price}`;
            productList.appendChild(li);
            price.appendChild(liPrice);
        })
        return products;
    }
    getTotal() {
        const totalPrice = this.products.map(product => product.price).reduce((acc, currentvalue) => acc + currentvalue);
        total.textContent = `Total: ${totalPrice} dkk`;
        console.log(totalPrice);
    }
    getUser() {
        const url = 'https://jsonplaceholder.typicode.com/users/1'
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const user = result.username;
                username.textContent = `Username : ${user}`;
            })
    }
}
const shoppingCart = new ShoppingCart();
const book = new Product('Book', 50);
const handCream = new Product('Hand cream', 80);
const sunglasses = new Product('Sunglasses', 1000);
const phoneCase = new Product('phone case', 100);
shoppingCart.addProduct(book);
shoppingCart.addProduct(handCream);
shoppingCart.addProduct(sunglasses);
shoppingCart.addProduct(phoneCase);
console.log(shoppingCart);
shoppingCart.getUser();
const purchase = shoppingCart.renderProducts()
shoppingCart.getTotal();
