Vue.component('product', {
  props: ['item'],
  template: `<div 
              :class="this.$parent.isCatalog ? 'product product_catalog' : 'product'">
              <div class="product__wrapper">
                <div class="product__hover">
                  <a href="#" @click.prevent="$root.$refs.cart.addToCart(item)" class="product__cart">
                    <div class="product__cart-bg"></div>
                    <div class="product__cart-text">Add to Cart</div>
                  </a>
                  <div class="product__social">
                    <a href="#" class="product__social-retweet"><i class="fas fa-retweet"></i></a>
                    <a href="#" class="product__social-like"><i class="fas fa-heart"></i></a>
                  </div>
                </div>
                <div class="product__img-wrapper">
                  <img class="product__img" 
                  :src="item.img"
                  :alt="item.name"
                  >
                </div>
                <a href="/product" class="product__name">{{item.name}}</a>
                <p class="product__price"> &#36;{{item.price}}</p>
              </div>
            </div>`,
});