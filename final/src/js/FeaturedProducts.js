Vue.component('featured-products', {
  mixins: [catalogMixin],
  template: ` <div class="products__container">
                <product 
                   v-for="product in products"
                   v-if="product.category_id === 1"
                   :key="product.id" 
                   :data-id="product.id" 
                   :item="product">
                 </product>
              </div>`
});