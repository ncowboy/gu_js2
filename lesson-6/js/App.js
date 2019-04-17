const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
  el: '#app',
  data: {
    defaultImg: 'img/soon.png',
  },
  methods: {
    request(url) {
      return fetch(`${API}/${url}`)
        .then(result => result.json())
        .catch(error => {
          console.log(error)
        });
    },
  }
});
