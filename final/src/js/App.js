const App = new Vue({
  el: '#app',
  methods: {
    getData(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
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
            console.log(error);
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
            console.log(error);
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
            console.log(error);
          })
    }
  }
});