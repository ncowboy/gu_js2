Vue.component('page-cart', {
    mixins: [cartMixin],

    template: `<div class="container cart-container">
                  <table class="table cart-content-table">
                    <thead class="cart-content-header">
                    <tr>
                      <th>Product Details</th>
                      <th>unite Price</th>
                      <th>Quantity</th>
                      <th>shipping</th>
                      <th>Subtotal</th>
                      <th>ACTION</th>
                    </tr>
                    </thead>
                    <page-product-in-cart 
                       v-for="product in productsInCart"
                       :key="product.id"
                       :data-id="product.id" 
                       :cart-item="product"
                      ></page-product-in-cart> 
                  </table>
                </div>`
});