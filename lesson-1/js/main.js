const products = [
    {title: 'Notebook', 'img': 'soon.png', price: 2000},
    {title: 'Mouse', 'img': 'soon.png', price: 20},
    {title: 'Keyboard', 'img': 'soon.png', price: 48},
    {title: 'Gamepad', 'img': 'soon.png', price: 63},
    {title: 'Chair', 'img': 'soon.png', price: 200},
    {title: 'Table', 'img': 'soon.png', price: 2050}
];


const renderProduct = (title, price, img) => {
    return `<div class="product-item card col-lg-2 col-md-3 col-sm-4">
              <img src="img/${img}" alt="${title}" class="card-img-top">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Цена: ${price}</p>
                <button class="cart-button btn btn-primary" type="submit"><i class="fas fa-cart-arrow-down"></i> Добавить </button>
              </div> 
            </div>`
};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.img));
    document.querySelector('.products').innerHTML = productList.join("");
};

renderPage(products);