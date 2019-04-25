Vue.component('showcase', {
  mixins: [catalogMixin],
  template: `<div class="products__container">
              <product 
                v-for="product in products"
                v-if="product.id !== 8"
                :key="product.id" 
                :data-id="product.id" 
                :item="product">
              </product>
            </div>`
});