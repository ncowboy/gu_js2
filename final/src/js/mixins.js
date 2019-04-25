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

const cartMixin = {
    data() {
        return {
            productsInCart: [],
            getProductsInCartUrl: '/api/cart',
            showCart: false
        }
    },

    mounted() {
        this.$parent.getData(this.getProductsInCartUrl)
            .then(data => {
                if (data) {
                    for (let el of data) {
                        this.productsInCart.push(el);
                    }
                }
            });
    },

    methods: {
        addToCart(product) {
            const object = this.findProductInCart(product.id);
            if (object) {
                this.$parent.putData(`/api/cart/${object.id}`, {qty: 1})
                    .then(data => {
                        if (data.result) {
                            object.qty++;
                        }
                    })
            } else {
                let newProduct = Object.assign({qty: 1}, product);
                this.$parent.postData('/api/cart', newProduct)
                    .then(data => {
                        if (data.result) {
                            this.productsInCart.push(newProduct)
                        }
                    })
            }

        },

        deleteFromCart(product) {
            if (product.qty > 1) {
                this.$parent.putData(`/api/cart/${product.id}`, {qty: -1})
                    .then(data => {
                        if (data.result) {
                            product.qty--;
                        }
                    })
            } else {
                this.$parent.deleteData('/api/cart/', {id: product.id})
                    .then(data => {
                        if (data.result) {
                            this.productsInCart.splice(this.productsInCart.indexOf(product), 1)
                        }
                    })
            }
        },

        findProductInCart(productId) {
            const index = this.productsInCart.findIndex(product => product.id === productId);
            if (index !== -1) {
                return this.productsInCart[index];
            } else {
                return false;
            }
        },

    },

    computed: {
        calculateCartQuantity() {
            let sum = 0;
            if (this.productsInCart.length !== 0) {
                return this.productsInCart.reduce((accumulator, value = 0) => {
                    return accumulator + value.qty;
                }, sum);
            }
        },

        calculateCartSum() {
            let sum = 0;
            if (this.productsInCart.length !== 0) {
                return this.productsInCart.reduce((accumulator, value = 0) => {
                    return accumulator + value.qty * value.price;
                }, sum);
            }
        },

    },

};