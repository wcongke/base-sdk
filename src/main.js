import Vue from 'vue'
import ElementUI from 'element-ui'
import BaseComponents from '../packages/base-components/index'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/global.styl'

import './components/index'

import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(BaseComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
