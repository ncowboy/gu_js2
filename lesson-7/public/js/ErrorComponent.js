Vue.component('error', {
  data(){
    return {
      isActive: false,
      message: 'Connection Error',
      requestedData: ''
    }
  },

  methods: {
    activate(url) {
      this.isActive = !this.isActive;
      this.requestedData = url;
    }
  },

  template: `<div class="alert alert-danger" role="alert"
              v-if="isActive">
              {{ message }} {{ requestedData }}
            </div>`
});