const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
    el: '#app',
    data: {
        defaultImg: 'img/soon.png',
    },
    methods: {
        getData(url) {
            return fetch(`${API}/${url}`)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.activate(url);
                });
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.activate(url);
                })
        },
        putData(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.activate(url);
                })
        },
    }
});
