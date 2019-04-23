const app = new Vue({
  el: '#app',
  data: {
    defaultImg: 'img/soon.png',
  },
  methods: {
    getData(url) {
      return fetch(url)
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