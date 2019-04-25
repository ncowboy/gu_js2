const App = new Vue({
  el: '#app',
  methods: {
    getData(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
        });
    },
  }
});