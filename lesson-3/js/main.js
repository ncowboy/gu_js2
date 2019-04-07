const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Catalog {
  constructor() {
    this.goods = [];
    this.allProducts = [];
    this.init();
  }

  init() {
    this._getProducts();
  }


  _getProducts() {
    fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .then(data => {
          this.goods = [...data];
          console.log(this.goods);
          this.render();
        })
        .catch(error => {
          console.log(error)
        });
  }

  render() {
    const block = document.querySelector('.products');
    this.goods.forEach(product => {
      const prod = new Product(product);
      this.allProducts.push(prod);
      block.insertAdjacentHTML('beforeend', prod.render())
    })
  }
}

class Product {
  constructor(product, img = 'soon.png') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.img = img
  }

  render() {
    return `<div class="product-item col-lg-3 col-md-6 mb-4">
              <div class="card h-100">
                  <img src="img/${this.img}" alt="${this.product_name}" class="card-img-top">
                  <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${this.product_name}</h5>
                    <p class="card-text">Цена: ${this.price} р.</p>
                    <button class="cart-button btn btn-primary" type="submit"><i class="fas fa-cart-arrow-down"></i> Добавить </button>
                  </div> 
              </div>    
            </div>`
  }

  addToCart() {
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


}


let catalog = new Catalog();
let cart = new Cart();