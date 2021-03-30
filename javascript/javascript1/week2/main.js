
console.log('Script loaded');
const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', productFinder);
function productFinder() {
    const searchInputValue = searchInput.value.toLowerCase();
    const filteredItems = products.filter(product => {
        if (!product.name.toLowerCase().includes(searchInputValue)) {
            return;
        }
        productsUl.innerHTML = '';
        return product.name;
    })
    console.log(filteredItems);
    renderProducts(filteredItems);
}

let sortSelector = document.getElementById("sort-by");
sortSelector.addEventListener("change", sortBy);
function sortBy(){

    let selectSortBy = sortSelector.selectedIndex;
    let sortedItemsBy;
    if(selectSortBy==="name"){
        sortedItemsBy =  products.sort((a, b) => a.name - b.name );
        productsList.innerHTML = "";
    }
    if(selectSortBy==="rating"){
        sortedItemsBy = products.sort((a,b)=> a.rating > b.rating );
        productsList.innerHTML = "";
    }
    if(selectSortBy==="price"){
        sortedItemsBy = products.sort((a, b) => a.price > b.price );
        productsList.innerHTML = "";
    }
    renderProducts(sortedProducts);
    console.log(sortedProducts);
}


const priceSearch = document.querySelector('.max-price');
priceSearch.addEventListener('keyup', searchByMaxPrice);
function searchByMaxPrice() {
    const maxPriceValue = priceSearch.value;
    const filteredMaxPrice = products.filter(product => {
        if (product.price < maxPriceValue) {

            productsUl.innerHTML = '';
            return product.price;
        }
    })
    console.log(filteredMaxPrice);
    renderProducts(filteredMaxPrice);

}
