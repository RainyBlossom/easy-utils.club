import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

