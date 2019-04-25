Vue.component('catalog', {
  mixins: [catalogMixin],
  data(){
    return { isCatalog: true}
  },
  template: ` <div class="products__container">
                <product 
                   v-for="product in products"
                   :key="product.id" 
                   :data-id="product.id" 
                   :item="product">
                 </product>
              </div>`
});

