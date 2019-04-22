Vue.component('error', {
  data(){
    return {
      isActive: false,
      message: '',
      requestedData: ''
    }
  },

  methods: {
    activate(url, data) {
      this.isActive = !this.isActive;
      this.requestedData = url;
      this.message = data;
    }
  },

  template: `<div class="alert alert-danger" role="alert"
              v-if="isActive">
              {{ message }} {{ requestedData }}
            </div>`
});