Vue.component('catalog', {
  data() {
    return {
      products: [],
      filteredProducts: [],
      isFilterOn: false,
     // requestUrl: 'cataaaalogData.json',
      requestUrl: 'catalogData.json',
      img: this.$parent.defaultImg
    }
  },

  methods: {
    filterProduct(string){
      this.isFilterOn = true;
      const regexp = new RegExp(string, 'i');
      this.filteredProducts = this.products.filter(good => regexp.test(good.product_name));
    },

    isFounded(product) {
      const index = this.filteredProducts.findIndex(prod => {
        return product.id_product === prod.id_product;
      });
      return (index !== -1);
    }
  },

  mounted() {
    this.$parent.request(this.requestUrl)
      .then(data => {
        if (data) {
          for (let el of data) {
            this.products.push(el);
          }
        }
      });
  },
  template: `<div class="products row">
                <catalog-item 
                   v-for="product in products"
                   :key="product.id_product" 
                   :data-id="product.id_product" 
                   :item="product"
                   :img="img">
                 </catalog-item>
              </div>`,

});
Vue.component('catalog-item', {
  props: ['item', 'img'],
  template: `<div class="product-item col-lg-3 col-md-6 mb-4"
                v-if="!$parent.isFilterOn || $parent.isFounded(item)">
                  <div class="card h-100">
                    <img 
                      :src="img" 
                      :alt="item.product_name" class="card-img-top">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <h5 class="card-title">{{ item.product_name }}</h5>
                      <p class="card-text">Цена: {{ item.price }} р.</p>
                      <button class="cart-button btn btn-primary" type="submit"
                        @click="$root.$refs.cart.addToCart(item)"  
                         :data-id="item.id_product">
                        <i class="fas fa-cart-arrow-down"></i> Добавить
                      </button>
                    </div>
                 </div>
              </div>
            `,
});