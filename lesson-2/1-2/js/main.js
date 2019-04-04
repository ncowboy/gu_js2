class Catalog {
  constructor() {
    this.products = [];
    this.init();
  }

  init() {
    this.fetchProducts();
    this.render();
  }

  fetchProducts() {
    this.products = [
      {title: 'Notebook', price: 2000},
      {title: 'Mouse', price: 20},
      {title: 'Keyboard', price: 48},
      {title: 'Gamepad', price: 63},
      {title: 'Chair', price: 200},
      {title: 'Table', price: 2050}
    ];
  }

  render() {
    const block = document.querySelector('.products');
    this.products.forEach(product => {
      const prod = new Product(product);
      block.insertAdjacentHTML('beforeend', prod.render())
    })
  }

  calculateAllProducts() {
    let sum = 0;
    this.products.forEach((product) => {
      sum += product.price;
    });
    return sum;
  }

}

class Product {
  constructor(product, img = 'soon.png') {
    this.title = product.title;
    this.price = product.price;
    this.img = img
  }

  render() {
    return `<div class="product-item card col-lg-2 col-md-3 col-sm-4">
              <img src="img/${this.img}" alt="${this.title}" class="card-img-top">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">Цена: ${this.price}</p>
                <button class="cart-button btn btn-primary" type="submit"><i class="fas fa-cart-arrow-down"></i> Добавить </button>
              </div> 
            </div>`
  }

}

class Cart {
  constructor() {
    this.productsInCart = [];
  }

  init() {
    this.render();
  }

  calculateCart() {
  }

  render() {
  }
}

class ProductInCart extends Product {
  constructor(product, img, count) {
    super(product, img);
    this.count = null;
  }

  addToCart() {
  }
}


let catalog = new Catalog();
let cart = new Cart();