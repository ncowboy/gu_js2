Vue.component('search', {
    data(){
        return {
            isFilterOn: false,
            filteredProducts: [],
            searchString: ''
        }
    },
    methods: {
        filterProduct(string){
            this.isFilterOn = true;
            const regexp = new RegExp(string, 'i');
            this.filteredProducts = this.$parent.$refs.catalog.products.filter(good => regexp.test(good.product_name));
        },

        isFounded(product) {
            const index = this.filteredProducts.findIndex(prod => {
                return product.id_product === prod.id_product;
            });
            return (index !== -1);
        }
    },

    template: `<form class="form-inline mt-2 mt-md-0"
                 v-on:submit.prevent="filterProduct(searchString)" >
                 <input class="form-control mr-sm-2" type="text" aria-label="Search"
                   v-model="searchString" placeholder="Search">
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                   <i class="fas fa-search"></i>
                 </button>
               </form>`
});