Vue.component('catalog', {
  data() {
    return {
      products: [],
      requestUrl: 'catalogData.json',
      img: this.$parent.defaultImg
    }
  },

  mounted() {
    this.$parent.request(this.requestUrl)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  },
  template: `<div class="products row">
                <catalog-item 
                   v-for="product in products"
                   :key="product.id_product" 
                   :data-id="product.id_product" 
                   :catalog-item="product"
                   :img="img"
                 </catalog-item>
              </div>`,

});
Vue.component('catalog-item', {
  props: ['item', 'img'],
  template: `<div class="product-item col-lg-3 col-md-6 mb-4"
                <!--v-if="!isFilterOn || isFounded(product)">-->
                  <div class="card h-100">
                    <img 
                      :src="img" 
                      :alt="product.product_name" class="card-img-top">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <h5 class="card-title">{{ product.product_name }}</h5>
                      <p class="card-text">Цена: {{ product.price }} р.</p>
                      <button class="cart-button btn btn-primary" type="submit"
                        @click="addToCart(product)"  
                         :data-id="product.id_product">
                        <i class="fas fa-cart-arrow-down"></i> Добавить
                      </button>
                    </div>
                 </div>
               </div>
            `,
});