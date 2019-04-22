Vue.component('cart', {
  data() {
    return {
      productsInCart: [],
      getProductsInCartUrl: '/api/cart',
      img: this.$parent.defaultImg,
      showCart: false
    }
  },

  mounted() {
    this.$parent.getData(this.getProductsInCartUrl)
      .then(data => {
        if (data) {
          for (let el of data['contents']) {
            this.productsInCart.push(el);
          }
        }
      });
  },

  methods: {
    addToCart(product) {
      const object = this.findProductInCart(product.id_product);
      if (object) {
        this.$parent.putData(`/api/cart/${object.id_product}`, {quantity: 1})
          .then(data => {
            if (data.result) {
              object.quantity++;
            }
          })
      } else {
        let newProduct = Object.assign({quantity: 1}, product);
        this.$parent.postData('/api/cart', newProduct)
          .then(data => {
            if (data.result) {
              this.productsInCart.push(newProduct)
            }
          })
      }

    },

    deleteFromCart(product) {
      if (product.quantity > 1) {
        this.$parent.putData(`/api/cart/${product.id_product}`, {quantity: -1})
          .then(data => {
            if (data.result) {
              product.quantity--;
            }
          })
      } else {
        this.$parent.deleteData('/api/cart/', {id: product.id_product})
          .then(data => {
            if (data.result) {
              this.productsInCart.splice(this.productsInCart.indexOf(product), 1)
            }
          })
      }
    },

    findProductInCart(productId) {
      const index = this.productsInCart.findIndex(product => product.id_product === productId);
      if (index !== -1) {
        return this.productsInCart[index];
      } else {
        return false;
      }
    },

  },

  computed: {
    calculateCartQuantity() {
      let sum = 0;
      if (this.productsInCart.length !== 0) {
        return this.productsInCart.reduce((accumulator, value = 0) => {
          return accumulator + value.quantity;
        }, sum);
      }
    },

    calculateCartSum() {
      let sum = 0;
      if (this.productsInCart.length !== 0) {
        return this.productsInCart.reduce((accumulator, value = 0) => {
          return accumulator + value.quantity * value.price;
        }, sum);
      }
    },

  },

  template: `<div>
                <button class="btn btn-success ml-3" type="button"
                  @click="showCart = !showCart">
                  <i class="fas fa-shopping-cart"></i> 
                  {{ calculateCartQuantity ? 'Товаров: ' + calculateCartQuantity 
                      + ' на сумму: ' + calculateCartSum : 'Корзина пуста'}}
                </button>
                <div class="cart-content" v-show="showCart">
                  <cart-item 
                   v-for="product in productsInCart"
                   :key="product.id_product"
                   :data-id="product.id_product" 
                   :img="img"
                   :cart-item="product"
                  ></cart-item> 
                </div>
              </div>`
});

Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `<div class="cart-item">
                <div class="cart-item-img">
                  <img :src="img" :alt="cartItem.product_name">
                </div>
                <div class="cart-item-name">{{ cartItem.product_name }}</div>
                <div class="cart-item-qty">{{ cartItem.quantity }}</div>
                <div class="cart-item-sum">{{ cartItem.price * cartItem.quantity }}</div>
                <a @click.prevent="$parent.deleteFromCart(cartItem)" href="#" class="cart-item-delete" 
                  :data-id="cartItem.id_product">
                  <i class="fas fa-times-circle"></i>
                </a>
              </div>`,
});