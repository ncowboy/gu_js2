const catalogMixin = {
  data() {
    return {
      products: [],
      requestUrl: 'api/catalog',

    }
  },
  mounted() {
    this.$parent.getData(this.requestUrl)
      .then(data => {
        if (data) {
          for (let el of data) {
            this.products.push(el);
          }
        }
      });
  },
};