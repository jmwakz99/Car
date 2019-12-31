import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created () {
    this.$store.dispatch('loadedCars')

  },
  render: h => h(App)
}).$mount('#app')
