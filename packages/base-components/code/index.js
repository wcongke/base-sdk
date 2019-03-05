import Code from './src/main.vue'

Code.install = (Vue) => {
  Vue.component(Code.name, Code)
}

export default Code
