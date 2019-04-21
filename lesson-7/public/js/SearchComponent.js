Vue.component('search', {
    data(){
        return {
            searchString: ''
        }
    },
    template: `<form class="form-inline mt-2 mt-md-0"
                 @submit.prevent="$parent.$refs.catalog.filterProduct(searchString)" >
                 <input class="form-control mr-sm-2" type="text" aria-label="Search"
                   v-model="searchString" placeholder="Search">
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                   <i class="fas fa-search"></i>
                 </button>
               </form>`
});