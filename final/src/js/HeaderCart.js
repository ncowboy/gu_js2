Vue.component('header-cart', {
    mixins: [cartMixin],
    template: `<div class="header__cart-wrapper">
                  <a href="#" class="header__cart"
                  @click.prevent="showCart = !showCart">
                    <div class="header__cart-count" v-show="calculateCartQuantity"><span>{{ calculateCartQuantity }}</span></div>
                  </a>
                  <div class="dropdown dropdown_cart" v-show="showCart && calculateCartQuantity">
                    <header-product-in-cart 
                       v-for="product in productsInCart"
                       @delete = "console.log($event)"
                       :key="product.id"
                       :data-id="product.id" 
                       :cart-item="product"
                      ></header-product-in-cart> 
                    <div class="dropdown_cart-total">
                      <div>total</div>
                      <div class="dropdown_cart-total">&#36;{{ calculateCartSum }}</div>
                    </div>
                    <a href="/checkout" class="button__cart button__cart_checkout">checkout</a>
                    <a href="/cart" class="button__cart button__cart_cart">go to cart</a>
                  </div>
               </div>`
});