Vue.component('page-product-in-cart', {
    props: ['cartItem'],
    template: `<tr class="cart-content-item">
                  <td>
                    <div class="cart-content-item-details d-flex">
                      <div class="cart-content-item-details-img">
                        <img 
                        :src="cartItem.img" 
                        :alt="cartItem.name">
                      </div>
                      <div class="cart-content-item-details-text">
                        <a href="/product" class="cart-content-item-details-name">
                          {{ cartItem.name }}
                        </a>
                        <p class="cart-content-item-details-color"><span class="cart-content-item-details-label">color: </span>red
                        </p>
                        <p class="cart-content-item-details-size"><span class="cart-content-item-details-label">size: </span>XIi
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>&#36;{{ cartItem.price }}</td>
                  <td><input type="number" 
                  :value="cartItem.qty"
                   min="0" max="100"></td>
                  <td>FREE</td>
                  <td>&#36; {{ cartItem.price * cartItem.qty }}</td>
                  <td><a href="#" class="dropdown_cart-close" 
                    @click.prevent="$parent.deleteFromCart(cartItem); $"  ><i class="fas fa-times-circle"></i></a></td>
                </tr>`
});