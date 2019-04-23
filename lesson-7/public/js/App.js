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
          this.$refs.error.activate(url, error.message);
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
          this.$refs.error.activate(url, error.message);
        })
    },
    putData(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.activate(url, error.message);
        })
    },
    deleteData(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.activate(url, error.message);
        })
    }
  }
});
