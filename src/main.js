import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import marked from 'marked'

import "@/assets/scss/common.scss"

Vue.config.productionTip = false

Vue.directive('md', {
  bind: (el, binding) => {
    el.innerHTML = marked(binding.value)
  },
  update: (el, binding) => {
    el.innerHTML = marked(binding.value)
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
