const products = [
    {title: 'Notebook', price: 2000},
    {title: 'Mouse', price: 20},
    {title: 'Keyboard', price: 48},
    {title: 'Gamepad', price: 63},
    {title: 'Chair', price: 200},
    {title: 'Table', price: 2050}
];


const renderProduct = (title, price, img = 'soon.png') => {
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