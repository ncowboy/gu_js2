"use strict";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',

    data: {
        products: [],
        productsInCart: [],
        defaultImg: 'img/soon.png'
    },
    methods: {
        request(url) {
            return fetch(`${API}/${url}`)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                });
        },
        showCart() {
            document.querySelector('.cart-content').classList.toggle('cart-content_open');
        }
    },
    mounted() {
        this.request('catalogData.json')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.request('getBasket.json')
            .then(data => {
                for (let el of data['contents']) {
                    this.productsInCart.push(el);
                }
            });
    }
});
console.log(app);

// class Catalog {
//   constructor() {
//     this.allProducts = [];
//     this.init();
//   }
//
//   init() {
//     this._getProducts();
//   }
//
//   async _getProducts() {
//     const request = new Request('catalogData.json');
//     const data = await request._exec();
//     this.render([...data]);
//   }
//
//   _searchProduct(productId) {
//     const index = this.allProducts.findIndex(product => product.id_product === productId);
//     if (index !== -1) {
//       return this.allProducts[index];
//     }
//   }
//
//   render(products) {
//     const block = document.querySelector('.products');
//     products.forEach(product => {
//       const prod = new Product(product);
//       this.allProducts.push(prod);
//       block.insertAdjacentHTML('beforeend', prod.render());
//     })
//   }
// }
//
// class Product {
//   constructor(product, img = 'soon.png') {
//     this.id_product = product.id_product;
//     this.product_name = product.product_name;
//     this.price = product.price;
//     this.img = img
//   }
//
//   render() {
//     return `<div class="product-item col-lg-3 col-md-6 mb-4" data-id="${this.id_product}">
//               <div class="card h-100">
//                   <img src="img/${this.img}" alt="${this.product_name}" class="card-img-top">
//                   <div class="card-body d-flex flex-column justify-content-between">
//                     <h5 class="card-title">${this.product_name}</h5>
//                     <p class="card-text">Цена: ${this.price} р.</p>
//                     <button class="cart-button btn btn-primary" data-id="${this.id_product}" type="submit"><i class="fas fa-cart-arrow-down"></i> Добавить </button>
//                   </div>
//               </div>
//             </div>`
//   }
// }
//
// class Cart {
//   constructor() {
//     this.productsInCart = [];
//     this.init();
//   }
//
//   init() {
//     this._getProductsInCart();
//     this.render(this.productsInCart);
//   }
//
//   render(products) {
//     const block = document.querySelector('.cart-content');
//     products.forEach(product => {
//       const prod = new ProductInCart(product);
//       this.productsInCart.push(prod);
//       block.insertAdjacentHTML('beforeend', prod.render());
//     });
//   }
//
//   async _getProductsInCart() {
//     const request = new Request('getBasket.json');
//     const data = await request._exec();
//     this.render([...data['contents']]);
//   }
//
//   _searchProductInCart(productId) {
//     const index = this.productsInCart.findIndex(product => product.id_product === productId);
//     if (index !== -1) {
//       return this.productsInCart[index];
//     }
//   }
//
//   async _addProductToCart(id) {
//     const request = new Request('addToBasket.json');
//     const data = await request._exec();
//     if (data['result'] === 1) {
//       let prod = catalog._searchProduct(id);
//       let productInCart = this._searchProductInCart(prod.id_product);
//       if (productInCart) {
//         productInCart.qty++;
//         Cart._renderProductSum(productInCart.id_product, 1);
//       } else {
//         let prodInCart = new ProductInCart(prod);
//         prodInCart.qty = 1;
//         this.productsInCart.push(prodInCart);
//         Cart._renderProductElement(prodInCart);
//       }
//     }
//   }
//
//   async _deleteProductFromCart(id) {
//     const request = new Request('deleteFromBasket.json');
//     const data = await request._exec();
//     if (data['result'] === 1) {
//       const prod = this._searchProductInCart(id);
//       if (prod.qty > 1) {
//         prod.qty--;
//         Cart._renderProductSum(id, 0);
//       } else {
//         const index = this.productsInCart.indexOf(this._searchProductInCart(id));
//         this.productsInCart.splice(index, 1);
//         Cart._deleteProductElement(id);
//       }
//     }
//   }
//
//   static _renderProductSum(productId, operation) {
//     const element = document.querySelector(`.cart-item[data-id="${productId}"]`);
//     const qtyEl = element.querySelector('.cart-item-qty');
//     const sumEl = element.querySelector('.cart-item-sum');
//     let qty = +qtyEl.textContent;
//     let sum = +sumEl.textContent;
//     const price = sum / qty;
//     if (operation === 1) {
//       qty++;
//       sum += price;
//     } else {
//       qty--;
//       sum -= price;
//     }
//     qtyEl.textContent = qty.toString();
//     sumEl.textContent = sum.toString();
//   }
//
//   static _deleteProductElement(productId) {
//     const element = document.querySelector(`.cart-item[data-id="${productId}"]`);
//     document.querySelector('.cart-content').removeChild(element);
//   }
//
//   static _renderProductElement(element) {
//     document.querySelector('.cart-content').insertAdjacentHTML('beforeend', element.render());
//   }
// }
//
// class ProductInCart extends Product {
//   constructor(product, img) {
//     super(product, img);
//     this.qty = product.quantity;
//   }
//
//   render() {
//     return `<div class="cart-item" data-id="${this.id_product}">
//               <div class="cart-item-img">
//                 <img src="img/${this.img}" alt="${this.product_name}">
//               </div>
//               <div class="cart-item-name">${this.product_name}</div>
//               <div class="cart-item-qty">${this.qty}</div>
//               <div class="cart-item-sum">${this.price * this.qty}</div>
//               <a href="#" class="cart-item-delete" data-id="${this.id_product}"><i class="fas fa-times-circle"></i></a>
//             </div>`;
//   }
// }
//
// class Request {
//   constructor(dir) {
//     this.dir = dir;
//     this.host = API;
//     this._exec();
//   }
//
//   _exec() {
//     return fetch(`${this.host}/${this.dir}`)
//       .then(result => result.json())
//   }
// }
//
// let catalog = new Catalog();
// let cart = new Cart();
//

