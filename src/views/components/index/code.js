const install = {}

install.code = `
npm install can.base-components -S
`

install.demo = `
import Vue from 'vue'
import App from './App.vue'

import BaseComponents from 'can.base-components'

Vue.use(BaseComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
`

export default install
