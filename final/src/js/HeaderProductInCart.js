Vue.component('header-product-in-cart', {
    props: ['cartItem'],
    template: `<div class="dropdown_cart-item">
                  <div class="dropdown_cart-img">
                    <img 
                    :src="cartItem.img" 
                    :alt="cartItem.name">
                  </div>
                  <div class="dropdown_cart-product">
                    <a href="/product" class="dropdown_cart-name">{{ cartItem.name }}</a>
                    <div class="dropdown_cart-rate">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="dropdown_cart-sum">{{ cartItem.qty }}<span class="dropdown_cart-x"> x </span>&#36;{{ cartItem.price }}</div>
                  </div>
                  <a href="#" @click.prevent="$parent.deleteFromCart(cartItem); " class="dropdown_cart-close"><i class="fas fa-times-circle"></i></a>
            </div>`
});